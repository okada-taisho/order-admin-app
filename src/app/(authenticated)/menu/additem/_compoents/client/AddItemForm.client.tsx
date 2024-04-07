"use client";
import * as formInput from "@/components/form/";
import { addData } from "@/lib/actions";
import useFormHooks from "@/components/form/hooks/useForm.hook";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { redirectwithRefresh } from "@/utils";
import ButtonWithIcon from "@/components/button/ButtonWithIcon";

const AddItemForm = () => {
  const { formValues } = useFormHooks();
  const router = useRouter();
  return (
    <>
      <ButtonWithIcon url={"/menu"} />

      <form
        className="mt-8"
        action={async () => {
          await addData(formValues, "menu");
          redirectwithRefresh("/menu", router);
        }}
      >
        <formInput.InputWithLabel
          type="text"
          labelName="商品名"
          id="productName"
          placeholder="商品名"
        />
        <formInput.InputWithLabel
          type="number"
          labelName="料金"
          id="value"
          placeholder="500"
        />
        <formInput.TextareaWithLabel
          labelName="説明"
          id="detail"
          placeholder="商品説明を入力してください"
        />
        <Button className="mt-8">送信</Button>
      </form>
    </>
  );
};

export default AddItemForm;
