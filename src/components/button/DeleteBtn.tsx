"use client";
import { Button } from "@/components/ui/button";
import { deleteData } from "@/lib/actions";
import { redirectwithRefresh } from "@/utils";
import { useRouter } from "next/navigation";

const DeleteBtn = (params: { id: string | undefined; tableName: string }) => {
  const { id, tableName } = params;
  const router = useRouter()
  if (!id) {
    return;
  }

  return (
    <Button
      onClick={async() => {
        await deleteData(id, tableName);
        redirectwithRefresh('/menu',router)
      }}
      className="mt-8 bg-red-500 hover:bg-red-700"
    >
      削除
    </Button>
  );
};

export default DeleteBtn;
