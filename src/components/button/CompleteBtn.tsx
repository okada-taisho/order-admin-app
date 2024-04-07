"use client";
import { Button } from "@/components/ui/button";
import { updateData } from "@/lib/actions";
import { createCurrentDate, redirectwithRefresh } from "@/utils";
import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/navigation";

const CompeteBtn = (data: DocumentData | null) => {
  const { currentDate } = createCurrentDate();
  const router = useRouter()

  if (!data) {
    return;
  }

  const currentOrderData = data.data;
  if (currentOrderData.completed_date) {
    return undefined;
  }
  const updateOrderData = {
    ...currentOrderData,
    completed_date: currentDate,
  };

  return (
    <Button
      className="mr-8 bg-blue-500 hover:bg-blue-700"
      type="submit"
      onClick={async () => {
        await updateData(updateOrderData, "order");
        redirectwithRefresh("/", router);
      }}
    >
      完了
    </Button>
  );
};

export default CompeteBtn;
