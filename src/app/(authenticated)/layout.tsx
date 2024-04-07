import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <section className="py-24 px-8 max-w-5xl mx-auto">{children}</section>
    </>
  );
}
