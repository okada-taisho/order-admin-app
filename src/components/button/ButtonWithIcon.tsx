"use client";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ButtonWithIcon = ({ url }: { url: string }) => {
  const router = useRouter();
  return (
    <Button asChild className="mr-8">
      <Link href={`${url}`}>戻る</Link>
    </Button>
  );
};

export default ButtonWithIcon;
