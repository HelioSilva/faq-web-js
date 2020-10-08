import { useField } from "@unform/core";
import React, { useEffect, useRef, useState } from "react";
import AreaInput from "./style";

const InputNext = ({ name, ...rest }) => {
  const [focused, setFocus] = useState(false);
  const [preenchido, setPreenchido] = useState(false);
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: "value" });
  }, [fieldName, registerField]);

  return (
    <AreaInput focus={focused} edited={preenchido}>
      <input
        autoComplete={"false"}
        placeholder={!focused && (rest.display ? rest.display : name)}
        onFocus={() => {
          setFocus(true);
          setPreenchido(true);
        }}
        onBlur={() => {
          setFocus(false);
          setPreenchido(inputRef.current.value != "");
        }}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      <p>{rest.display ? rest.display : name}</p>
    </AreaInput>
  );
};

export default InputNext;
