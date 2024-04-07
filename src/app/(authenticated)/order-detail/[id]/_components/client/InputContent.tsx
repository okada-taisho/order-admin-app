"use client";
import useFormHooks from "@/components/form/hooks/useForm.hook";
import { Input } from "@/components/ui/input";

const InputContent = (param: {
  id: string;
  name: string;
  type: string;
  orderData: string | number | undefined;
}) => {
  const { setInputAttr } = useFormHooks();
  const { id, type, name, orderData } = param;

  if (typeof orderData === "object") {
    return;
  }
  return (
    <Input
      {...setInputAttr({
        id: id,
        type: type,
        formValues: orderData || "",
        inputName: name,
      })}
    />
  );
};

export default InputContent;
