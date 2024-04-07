import { DocumentData } from "firebase/firestore";
import OrderContentServer from "./server/OrderContent.server";
import useFetch from "@/hooks/useFetch.hooks";

const OrderContent = async ({ params }: { params: { id: string } }) => {
  const { fetchDataById } = useFetch();
  const id = params.id;
  if (!id) {
    return <p>商品が存在しませんでした</p>;
  }
  const order: DocumentData | null = await fetchDataById(id, "order");
  if (!order) {
    return <p>商品が見つかりませんでした</p>;
  } else {
    return <OrderContentServer order={order} />;
  }
};

export default OrderContent;
