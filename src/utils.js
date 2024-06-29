export const calculateTotalPrice = (items) => {
  return items?.reduce((total, item) => total + item.price, 0).toFixed(2) || 0;
};
