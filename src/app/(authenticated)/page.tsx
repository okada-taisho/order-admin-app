import { TypographyH2 } from "@/components/ui/typography";
import { Suspense } from "react";
import CompleteModeSwitch from "@/components/order/CompleteModeSwitch";
import OrderTable from "@/components/order/OrderTable";
import  AuthProvider  from "@/components/auth/sever.parent";
import ServerComponentProvider from "@/components/auth/sever.parent";

export default function HomePage() {
  return (
    <AuthProvider>
      <Suspense>
        <TypographyH2>注文履歴</TypographyH2>
        <CompleteModeSwitch />
        <div className="md:container mx-auto mt-16">
          <OrderTable />
        </div>
      </Suspense>
    </AuthProvider>
  );
}
