import create from "zustand";
import { MenuStore } from "../types";
import { DocumentData } from "firebase/firestore";


export const useMenuStore = create<DocumentData>((set) => ({
  menuValues: {
    id:"",
    productName: "",
    value: "",
    detail: "",
    created_date: "",
  },
  setMenuValues: (newValues:MenuStore) =>
    set((state) => ({ menuValues: { ...state.menuValues, ...newValues } })),
}));
