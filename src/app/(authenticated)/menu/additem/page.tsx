import { Suspense } from "react";
import AddItemForm from "./_compoents/client/AddItemForm.client";
import AuthProvider from "@/components/auth/sever.parent";
import Header from "@/components/header";
const AddItemPage = () => {
  return (
    <AuthProvider>
      <Suspense>
        <AddItemForm />
      </Suspense>
    </AuthProvider>
  );
};

export default AddItemPage;
