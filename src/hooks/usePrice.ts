const usePrice = () => {
  const convertPriceFormat = (price: number): string => {
    return new Intl.NumberFormat().format(price);
  };

  return { convertPriceFormat };
};

export default usePrice;
