import { FormState } from "../form/types";

export type MenuState = FormState & {
  created_date: string;
};

export type MenuStore = {
  menuValues: MenuState;
  setMenuValues: (newValues: Partial<MenuState>) => void;
};
