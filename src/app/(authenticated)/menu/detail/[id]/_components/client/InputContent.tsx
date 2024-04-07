"use client";
import useFormHooks from "@/components/form/hooks/useForm.hook";
import { useFormStore } from "@/components/form/hooks/useForm.store";
import { FormState } from "@/components/form/types";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/utils";
import { useEffect, useId } from "react";

const InputContent = (param: {
  id: string;
  name: string;
  type: string;
  menu: FormState;
  nochange?:boolean
}) => {
  const { setInputAttr } = useFormHooks();
  const { formValues, setFormValues } = useFormStore();
  const {id, type,name, menu,nochange } = param;

  useEffect(() => {
    setFormValues(menu);
  }, [menu, setFormValues]);

  const value = formValues[name];

  if (typeof value === "object") {
    return (
      <Input
        {...setInputAttr({
          id:id,
          type: type,
          formValues: formatDate(Number(value.seconds)) || "",
          inputName:name,
          nochange:nochange
        })}
      />
    );
  }
  return (
    <Input
      {...setInputAttr({
        id:id,
        type: type,
        formValues: value || "",
        inputName:name,
        nochange:nochange
      })}
    />
  );
};

export default InputContent;
