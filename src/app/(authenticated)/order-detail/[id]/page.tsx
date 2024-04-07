import { Suspense } from "react";
import OrderContent from "./_components";
import AuthProvider from "@/components/auth/sever.parent";

const OrderDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <AuthProvider>
      <Suspense>
        <OrderContent params={params} />
      </Suspense>
    </AuthProvider>
  );
};

export default OrderDetailPage;
