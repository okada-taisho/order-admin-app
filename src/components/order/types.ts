export type OrderState = {
  id: string;
  created_date?: { seconds: string; nanoseconds: string };
  completed_date?: { seconds: string; nanoseconds: string };

  order: {
    [id: string]: {
      count: number;
      productName: string;
      value: number;
    };
  };
};
export type OrderStore = {
  orderValues: OrderState;
  setOrderValues: (newValues: Partial<OrderState>) => void;
};

export type orderMode = {
  mode: boolean;
  setMode: (newBool: boolean) => void;
};
