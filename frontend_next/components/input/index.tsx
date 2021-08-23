import { useField } from "@unform/core";
import React, { FC, useEffect, useRef, useState } from "react";
// import InputMaterialUI, {
//   BaseTextFieldProps,

//   StandardTextFieldProps,
// } from "@material-ui/core/TextField";
import { TextField } from "unform-material-ui";

const InputNext = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  // useEffect(() => {
  //   registerField({ name: fieldName, ref: inputRef.current, path: "value" });
  // }, [fieldName, registerField]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <TextField name={name} ref={inputRef} variant={"standard"} {...rest} />
  );
};

export default InputNext;
