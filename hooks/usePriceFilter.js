import * as React from "react";

export default function usePriceFilter(salons) {
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(100);
  const [isFiltered, setIsFiltered] = React.useState(false);
  const [filteredSalons, setFilteredSalons] = React.useState([]);
  const [values, setValues] = React.useState([0, 100]);

  React.useEffect(() => {
    if (!salons && !salons.length) return;

    console.log("asdfköldj");

    const max = getMaxPrice(salons);
    const min = getMinPrice(salons);

    setMinPrice(min);
    setMaxPrice(max);
  }, [salons]);

  React.useEffect(() => {
    if (!salons && !salons.length) return;

    const filtered = salons.filter(
      (salon) =>
        salon.cutting_price >= values[0] && salon.cutting_price <= values[1]
    );

    setFilteredSalons(filtered);
  }, [values, salons]);

  const getMinPrice = (salons) => {
    const values = salons.map((salon) => salon.cutting_price);
    return Math.min.apply(null, values);
    // const lowestPrice = salons.reduce((lowestPrice, salon) => {
    //   return salon.cutting_price < lowestPrice.cutting_price
    //     ? salon
    //     : lowestPrice;
    // }, salon[0]);

    // console.log("LOWEst", lowestPrice);
    // return lowestPrice;
  };

  const getMaxPrice = (salons) => {
    const values = salons.map((salon) => salon.cutting_price);
    return Math.max.apply(null, values);
    // const highestPrice = salons.reduce((highestPrice, salon) => {
    //   return salon.cutting_price > highestPrice.cutting_price
    //     ? salon
    //     : highestPrice;
    // }, salon[0]);

    // console.log("Highest", highestPrice);
    // return highestPrice;
  };

  return {
    values,
    setValues,
    minPrice,
    maxPrice,
    isFiltered,
    filteredSalons,
  };
}
