import { useEffect, useState } from "react";
import { useMenuStore } from "./useMenu.store";
import { DocumentData } from "firebase/firestore";
import useFetch from "@/hooks/useFetch.hooks";

const useMenuHooks = () => {
  const [menuData, setMenuData]  = useState<DocumentData[]>([]);
  const { fetchData } = useFetch();

  useEffect(()=>{    
    const unsubscribe = fetchData("menu", (dataList) => {
      setMenuData(dataList)
    });
  },[])
  

  return { menuData };
};

export default useMenuHooks;
