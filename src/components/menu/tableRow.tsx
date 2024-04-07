"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { DocumentData } from "firebase/firestore";
import Link from "next/link";
import useFetch from "@/hooks/useFetch.hooks";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import useMenuData from "./hooks/useMenu.hook";

const MenuTable = () => {
  const { menuData } = useMenuData();

  return (
    <>
      {menuData.map((menuItem: any) => (
        <TableRow key={menuItem.id} className="relative">
          <TableCell className="font-medium underline">
            <Link href={`/menu/detail/${menuItem.id}`}>{menuItem.id}</Link>
          </TableCell>
          <TableCell>{menuItem.productName}</TableCell>
          <TableCell>{menuItem.detail}</TableCell>
          <TableCell className="text-right">{menuItem.value}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default MenuTable;
