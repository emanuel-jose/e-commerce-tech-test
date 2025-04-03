export const moneyMask = (value: number) => {
  return value.toLocaleString("pt-Br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const percentageMask = (value: number) => {
  return new Intl.NumberFormat("pt-Br", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value / 100);
};

export const ratingMask = (value: number) => {
  return value.toFixed(1);
};
