import Header from "@/components/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="py-24 px-8 max-w-3xl mx-auto">{children}</section>
    </>
  );
}
