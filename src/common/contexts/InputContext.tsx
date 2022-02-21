import React, { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";

export default function InputContext({ children }: { children: ReactNode }) {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
}
