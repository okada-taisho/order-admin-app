import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import MenuTable from "@/components/menu";
import Link from "next/link";
import { Suspense } from "react";
import AuthProvider from "@/components/auth/sever.parent";

export default function MenuPage() {
  return (
    <AuthProvider>
      <Suspense>
        <TypographyH2>Menu</TypographyH2>
        <Button asChild className="mt-4">
          <Link href="/menu/additem">追加</Link>
        </Button>
        <div className="md:container mx-auto mt-16">
          <MenuTable />
        </div>
      </Suspense>
    </AuthProvider>
  );
}
