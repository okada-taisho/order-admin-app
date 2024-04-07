import { orderMode } from "../types";
import createStore from "zustand";

export const useOrderMode = createStore<orderMode>((set) => ({
  mode: true,
  setMode: (newBool) => set((state) => ({ mode: newBool })),
}));
