import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useFormHooks from "./hooks/useForm.hook";
import { inputArgumentType } from "./types";

const TextareaWithLabel = ({
  labelName,
  id,
  placeholder,
}: inputArgumentType) => {
  const { inputChangeSetState } = useFormHooks();

  return (
    <div className="grid w-full gap-1.5 mt-4">
      <Label htmlFor={id}>{labelName}</Label>
      <Textarea
        placeholder={placeholder}
        id={id}
        onChange={(e) => inputChangeSetState<HTMLTextAreaElement>(e)}
      />
    </div>
  );
};

export default TextareaWithLabel;
