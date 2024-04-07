"use client";

const Orders = (param: {
  id: string;
  productName: string;
  type: string;
  orderData: {
    order: {
      [id: string]: {
        count: number;
        productName: string;
        value: number;
      };
    };
  };
}) => {
  const { orderData } = param;

  if (!orderData.order) {
    return undefined;
  }

  return (
    <>
      {Object.entries(orderData.order).map(([key, value], innerIndex) => (
        <p key={innerIndex}>{`${value.productName} 個数：${value.value}`}</p>
      ))}
    </>
  );
};

export default Orders;
