import { useField } from "@unform/core";
import React, { useEffect, useRef, useState } from "react";
import AreaInput from "./style";

const InputNext = ({ name, ...rest }) => {
  const [focused, setFocus] = useState(false);
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: "value" });
  }, [fieldName, registerField]);

  return (
    <AreaInput focus={focused}>
      <div>
        <p>Teste</p>
      </div>
      <div>
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={rest.display ? rest.display : name}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
      </div>
    </AreaInput>
  );
};

export default InputNext;
