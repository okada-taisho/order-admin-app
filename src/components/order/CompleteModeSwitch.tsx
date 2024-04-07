"use client";
import { Switch } from "@/components/ui/switch";
import { useOrderMode } from "./hooks/useOrder.hook";

const CompleteModeSwitch = () => {
  const { mode, setMode } = useOrderMode();

  return (
    <div className="flex gap-4 mt-4">
      <p>未完了</p>
      <Switch
        onClick={(e) => {
          setMode(!mode);
        }}
      />
      <p>完了</p>
    </div>
  );
};

export default CompleteModeSwitch;
