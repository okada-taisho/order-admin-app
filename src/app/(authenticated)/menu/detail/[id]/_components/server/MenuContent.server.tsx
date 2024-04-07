import { Input } from "@/components/ui/input";
import { DocumentData } from "firebase/firestore";
import EditBtn from "@/components/button/EditBtn";
import DeleteBtn from "@/components/button/DeleteBtn";
import { useFormStore } from "@/components/form/hooks/useForm.store";
import { TitleWithInput } from "../parents/TitleWithInput.parents";
import { FormState } from "@/components/form/types";
import useFormHooks from "@/components/form/hooks/useForm.hook";
import { useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import InputContent from "../client/InputContent";
import TextAreaContent from "../client/TextAreaContent";
import ButtonWithIcon from "@/components/button/ButtonWithIcon";

const MenuContentServer = (obj: DocumentData | null) => {
  const menu: FormState = obj ? obj.menu : null;

  if (!menu) {
    return <p>商品が見つかりませんでした</p>;
  }

  return (
    <div className="mt-8">
      <ButtonWithIcon url="/menu" />
      <TitleWithInput heading="商品ID">
        <InputContent id="productId" name="id" menu={menu} type="text" nochange={true} />
      </TitleWithInput>

      <TitleWithInput heading="商品名">
        <InputContent
          id="productName"
          name="productName"
          menu={menu}
          type="text"
        />
      </TitleWithInput>

      <TitleWithInput heading="金額">
        <InputContent id="value" name="value" menu={menu} type="number" />
      </TitleWithInput>

      <TitleWithInput heading="作成日">
        <InputContent
          id="created_date"
          name="created_date"
          menu={menu}
          type="text"
          nochange={true}
        />
      </TitleWithInput>

      <TitleWithInput heading="説明">
        <TextAreaContent id={"detail"} name="detail" menu={menu} type="text" />
      </TitleWithInput>

      <EditBtn />
      <DeleteBtn id={menu.id} tableName="menu" />
    </div>
  );
};

export default MenuContentServer;
