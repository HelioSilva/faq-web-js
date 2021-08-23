import { Form } from "@unform/web";
import Router from "next/router";

import api from "../../Services/api";
import React, { useEffect, useRef } from "react";
import Header from "../../components/headerHome";
import { BodyHome } from "../../styles/home/style";
import Footer from "../../components/footer";
import { useAuth } from "../../context/AuthContext";
import ImageInput from "../../components/input/ImageInput";
import Container from "../../components/_systemUI/container";

import { TextField } from "unform-material-ui";
import { Button } from "@material-ui/core";

const Profile = () => {
  const formRef = useRef(null);
  const { name, email, urlImage, RefreshCookie } = useAuth();

  useEffect(() => {
    formRef.current.setData({
      name,
      email,
      password: "",
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
        <Container flex width={"100%"}>
          <Container style={{}} width={"300px"} height={"300px"}>
            {urlImage && (
              <img
                width={"200px"}
                height={"200px"}
                style={{ borderRadius: "50%", objectFit: "cover" }}
                src={`${urlImage}`}
              />
            )}
          </Container>
          <Container flex width={"100%"}>
            <Form
              ref={formRef}
              style={{ width: "100%" }}
              onSubmit={async (data) => {
                console.log(data);
                let fd = new FormData();
                fd.append("img", data.img);
                fd.append("email", data.email);
                fd.append("name", data.name);
                fd.append("password", data.password);

                const x = await api.put("/users", fd, {
                  headers: { "Content-Type": "multipart/form-data" },
                });

                await RefreshCookie(email);
                Router.push("/profile");
              }}
            >
              <div style={{ padding: "10px 0px 10px 0px" }}>
                <ImageInput name={"img"} />
              </div>
              <div style={{ padding: "10px 0px 10px 0px" }}>
                <TextField
                  name={"email"}
                  label={"E-mail"}
                  variant={"standard"}
                  defaultValue={email}
                  fullWidth={true}
                />
                <TextField
                  label={"Nome"}
                  name={"name"}
                  variant={"standard"}
                  defaultValue={name}
                  fullWidth={true}
                />
                <TextField
                  typeof="text"
                  label={"Senha"}
                  name={"password"}
                  type="password"
                  variant={"standard"}
                  fullWidth={true}
                />
              </div>

              <Button variant="contained" color="primary" type="submit">
                Cadastrar
              </Button>
            </Form>
          </Container>
        </Container>
      </BodyHome>
      <Footer />
    </div>
  );
};

export default Profile;
