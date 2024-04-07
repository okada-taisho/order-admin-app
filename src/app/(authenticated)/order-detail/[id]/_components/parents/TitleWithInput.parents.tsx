import { TypographyH4 } from "@/components/ui/typography";

export const TitleWithInput: React.FC<
  React.PropsWithChildren<{
    heading: string;
  }>
> = ({ heading, children }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
      <TypographyH4>{heading}</TypographyH4>
      {children}
    </div>
  );
};
