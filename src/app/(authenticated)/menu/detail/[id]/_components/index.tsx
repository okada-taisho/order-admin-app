import MenuContentServer from "./server/MenuContent.server";
import { DocumentData } from "firebase/firestore";
import useFetch from "@/hooks/useFetch.hooks";

const MenuContent = async ({ params }: { params: { id: string } }) => {
  const { fetchDataById } = useFetch();
  const id = params.id;
  if (!id) {
    return <p>商品が存在しませんでした</p>;
  }

  const menu: DocumentData | null = await fetchDataById(id, "menu");
  if (!menu) {
    return <p>商品が見つかりませんでした</p>;
  } else {
    return <MenuContentServer menu={menu} />;
  }
};

export default MenuContent;
