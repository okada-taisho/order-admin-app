import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useFormHooks from "./hooks/useForm.hook";
import { inputArgumentType } from "./types";

const InputWithLabel = ({
  type,
  labelName,
  id,
  placeholder,
  disabled,
}: inputArgumentType) => {
  const { inputChangeSetState } = useFormHooks();

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
      <Label htmlFor={id}>{labelName}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled ? disabled : false}
        onChange={(e) => inputChangeSetState<HTMLInputElement>(e)}
      />
    </div>
  );
};

export default InputWithLabel;
