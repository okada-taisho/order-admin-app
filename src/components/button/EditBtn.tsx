"use client";
import { Button } from "@/components/ui/button";
import useFormHooks from "../form/hooks/useForm.hook";
import { useFormStore, useInputMode } from "../form/hooks/useForm.store";
import { updateData } from "@/lib/actions";
import { redirectwithRefresh } from "@/utils";
import { useRouter } from "next/navigation";
import { tree } from "next/dist/build/templates/app-page";

const EditBtn = () => {
  const { reverseMode } = useFormHooks();
  const { mode, setMode } = useInputMode();
  const router = useRouter();
  const { formValues } = useFormStore();

  if (mode) {
    return (
      <Button className="mr-8" onClick={reverseMode}>
        編集
      </Button>
    );
  } else {
    return (
      <Button
        className="mr-8 bg-blue-500 hover:bg-blue-700"
        type="submit"
        onClick={async () => {
          await updateData(formValues, "menu");
          setMode(true);
          redirectwithRefresh("/menu", router);
        }}
      >
        確定
      </Button>
    );
  }
};

export default EditBtn;
