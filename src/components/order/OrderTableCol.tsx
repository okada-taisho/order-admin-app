"use client";
import { useOrderMode } from "@/components/order/hooks/useOrder.hook";
import { TableCell, TableRow } from "@/components/ui/table";
import useFetch from "@/hooks/useFetch.hooks";
import { formatDate } from "@/utils";
import { DocumentData } from "firebase/firestore";
import Link from "next/link";
import { useEffect } from "react";

const OrderTableCol = (param: { data: DocumentData[] }) => {
  const { mode, setMode } = useOrderMode();
  const orderData = param.data;

  if (!orderData) {
    return (
      <TableRow>
        <TableCell colSpan={4}>商品が設定されておりません</TableCell>
      </TableRow>
    );
  }

  useEffect(() => {
    setMode(true);
  }, []);

  return (
    <>
      {orderData.map(
        (orderItem, index) =>
          (typeof orderItem.completed_date?.seconds === "undefined") ===
            mode && (
            <TableRow key={orderItem.id} className="relative">
              <TableCell className="font-medium underline">
                <Link href={`/order-detail/${orderItem.id}`}>
                  {orderItem.id}
                </Link>
              </TableCell>
              <TableCell>{formatDate(orderItem.created_date.seconds)}</TableCell>
              <TableCell>{formatDate(orderItem.completed_date?.seconds)}</TableCell>
            </TableRow>
          )
      )}
    </>
  );
};

export default OrderTableCol;
