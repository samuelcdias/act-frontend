import React from "react";
import { Input } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { Props } from "./types";

export function InputStyled(props: Props) {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Controller
        name={props.name}
        control={control}
        defaultValue={!!props.default ? props.default : ""}
        render={({ field }) => (
          <Input {...field} data-test={`input-${props.name}`} />
        )}
      />
      <p>{errors[props.name]?.message}</p>
    </>
  );
}
