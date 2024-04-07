import createStore from "zustand";
import { FormStore, inputMode } from "../types";

export const useFormStore = createStore<FormStore>((set) => ({
  formValues: {
    id: "",
    productName: "",
    value: 0,
    detail: "",
  },
  setFormValues: (newValues) =>
    set((state) => ({ formValues: { ...state.formValues, ...newValues } })),
}));

export const useInputMode = createStore<inputMode>((set) => ({
  mode: true,
  setMode: (newBool) => set((state) => ({ mode: newBool })),
}));
