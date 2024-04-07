import { DocumentData } from "firebase/firestore";
import DeleteBtn from "@/components/button/DeleteBtn";
import { TitleWithInput } from "../parents/TitleWithInput.parents";
import InputContent from "../client/InputContent";
import { OrderState } from "@/components/order/types";
import Orders from "../client/Orders";
import CompeteBtn from "@/components/button/CompleteBtn";
import ButtonWithIcon from "@/components/button/ButtonWithIcon";
import { formatDate } from "@/utils";

const OrderContentServer = (obj: DocumentData | null) => {
  const orderData: OrderState = obj ? obj.order : null;

  if (!orderData) {
    return <p>商品が見つかりませんでした</p>;
  }

  return (
    <div className="mt-8">
      <ButtonWithIcon url="/" />
      <TitleWithInput heading="注文ID">
        <InputContent
          id="ordertId"
          name="id"
          orderData={orderData.id}
          type="text"
        />
      </TitleWithInput>
      <TitleWithInput heading="注文内容">
        <Orders
          id="order"
          productName="order"
          orderData={orderData}
          type="text"
        />
      </TitleWithInput>

      <TitleWithInput heading="作成日">
        <InputContent
          id="created_date"
          name="created_date"
          orderData={formatDate(orderData.created_date?.seconds)}
          type="text"
        />
      </TitleWithInput>

      <TitleWithInput heading="完了日">
        <InputContent
          id="completed_date"
          name="completed_date"
          orderData={formatDate(orderData.completed_date?.seconds)}
          type="text"
        />
      </TitleWithInput>

      <CompeteBtn data={orderData} />
      <DeleteBtn id={orderData.id} tableName="order" />
    </div>
  );
};

export default OrderContentServer;
