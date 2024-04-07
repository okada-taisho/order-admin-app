import { ChangeEvent, useId } from "react";
import { useFormStore, useInputMode } from "./useForm.store";

const useFormHooks = () => {
  const { formValues, setFormValues } = useFormStore();
  const { mode, setMode } = useInputMode();

  const inputChangeSetState = <
    T extends HTMLInputElement | HTMLTextAreaElement
  >(
    e: React.ChangeEvent<T>
  ) => {
    if (!("target" in e)) {
      return;
    }

    const { id, value } = e.target;
    setFormValues({ [id]: value });
    console.log(formValues);
  };

  const reverseMode = () => {
    setMode(!mode);
  };

  const setInputAttr = ({
    id,
    type,
    formValues,
    inputName,
    nochange,
  }: {
    id: string;
    type?: string;
    formValues: string | number;
    inputName: string;
    nochange?: boolean;
  }) => {
    const inputAttr = {
      id: id,
      name: inputName,
      text: type,
      disabled: nochange ? true : mode,
      onChange: (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
      ) => inputChangeSetState<HTMLInputElement | HTMLTextAreaElement>(e),
      value: formValues ? formValues : "",
    };
    return inputAttr;
  };

  return {
    formValues,
    inputChangeSetState,
    reverseMode,
    setInputAttr,
  };
};

export default useFormHooks;
