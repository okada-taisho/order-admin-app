import { Suspense } from "react";
import MenuContent from "./_components";
import AuthProvider from "@/components/auth/sever.parent";
import Header from "@/components/header";

const MenuContentPage = ({ params }: { params: { id: string } }) => {
  return (
    <AuthProvider>
      <Suspense>
        <MenuContent params={params} />
      </Suspense>
    </AuthProvider>
  );
};

export default MenuContentPage;
