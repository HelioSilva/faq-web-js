import { Form } from "@unform/web";
import Input from "../../components/input/index";
import Link from "next/link";
import Router from "next/router";

import api from "../../Services/api";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/headerHome";
import { BodyHome } from "../../styles/home/style";
import Footer from "../../components/footer";
import { useAuth } from "../../context/AuthContext";
import ImageInput from "../../components/input/ImageInput";
import Container from "../../components/_systemUI/container";

const Profile = () => {
  const formRef = useRef(null);
  const { name, email, urlImage, RefreshCookie } = useAuth();

  useEffect(() => {
    formRef.current.setData({
      name,
      email,
    });
  }, []);
  return (
    <div>
      <Header />
      <BodyHome>
        <h4
          style={{
            margin: "24px 0px",
            color: "#535151",
            fontWeight: 700,
            textRendering: "optimizeLegibility",
            fontSize: "1.1em",

            overflowWrap: "break-word",
          }}
        >
          {"Meu perfil"}
        </h4>
        <Container flex style={{ alignItems: "center" }}>
          <Container style={{ marginRight: "21px" }} width={"200px"}>
            {urlImage && (
              <img
                width={"200px"}
                height={"200px"}
                style={{ borderRadius: "50%", objectFit: "cover" }}
                src={`http://localhost:3333/${urlImage}`}
              />
            )}
            <Form
              ref={formRef}
              onSubmit={async (data) => {
                const config = {
                  headers: { "Content-Type": "multipart/form-data" },
                };
                let fd = new FormData();
                fd.append("img", data.img);
                fd.append("email", email);
                await api.put("/users", fd, config);
              }}
            >
              <ImageInput name={"img"} />
              <button style={{ marginTop: "25px" }} type="submit">
                Alterar imagem
              </button>
            </Form>
          </Container>
          <Container>
            <Form
              ref={formRef}
              onSubmit={async (data) => {
                const x = await api.put("/users", {
                  name: data.name,
                  email: email,
                });

                await RefreshCookie(email);
                Router.push("/profile");
              }}
            >
              <Input display="Nome" name={"name"} />
              <Input enable={false} display="Email" name={"email"} />

              <ImageInput name={"img"} />
              <button style={{ marginTop: "25px" }} type="submit">
                Cadastrar
              </button>
            </Form>
          </Container>
        </Container>
      </BodyHome>
      <Footer />
    </div>
  );
};

export default Profile;
