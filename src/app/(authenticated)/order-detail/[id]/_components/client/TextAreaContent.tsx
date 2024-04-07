"use client";
import useFormHooks from "@/components/form/hooks/useForm.hook";
import { useFormStore } from "@/components/form/hooks/useForm.store";
import { FormState } from "@/components/form/types";
import { Textarea } from "@/components/ui/textarea";

import { useEffect } from "react";

const TextAreaContent = (param: {
  id: string;
  name: string;
  type: string;
  menu: FormState;
}) => {
  const { setInputAttr } = useFormHooks();
  const { formValues, setFormValues } = useFormStore();
  const { id, type, name, menu } = param;
  useEffect(() => {
    setFormValues(menu);
  }, [menu, setFormValues]);

  const value = formValues[name];

  if (typeof value === "object") {
    return undefined;
  }

  return (
    <Textarea
      {...setInputAttr({
        id: id,
        type: type,
        formValues: value || "",
        inputName: name,
      })}
    />
  );
};

export default TextAreaContent;
