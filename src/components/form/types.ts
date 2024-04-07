export type FormState = {
  productName: string;
  value: number;
  detail: string;
  id?: string;
  created_date?: { seconds: string; nanoseconds: string };
  [key: string]:
    | string
    | number
    | undefined
    | { seconds: string; nanoseconds: string };
};

export type inputArgumentType = {
  labelName: string;
  id: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
};

export type inputMode = {
  mode: boolean;
  setMode: (newBool: boolean) => void;
};

export type FormStore = {
  formValues: FormState;
  setFormValues: (newValues: Partial<FormState>) => void;
};
