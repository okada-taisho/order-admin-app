"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OrderTableCol from "./OrderTableCol";
import { DocumentData } from "firebase/firestore";
import useFetch from "@/hooks/useFetch.hooks";
import { useEffect, useState } from "react";

const OrderTable = () => {
  const { fetchData } = useFetch();
  const [orderData, setOrderData] = useState<DocumentData[]>([]);

  useEffect(() => {
    const unsubscribe = fetchData("order", (dataList) => {
      setOrderData(dataList);
    });
  }, []);

  return (
    <Table>
      <TableCaption>Menu一覧</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">注文ID</TableHead>
          <TableHead>作成日</TableHead>
          <TableHead>完了日</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <OrderTableCol data={orderData} />
      </TableBody>
    </Table>
  );
};

export default OrderTable;
