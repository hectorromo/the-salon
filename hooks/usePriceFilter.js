import { useState, useEffect } from 'react';

export default function usePriceFilter(salons) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredSalons, setFilteredSalons] = useState([]);
  const [values, setValues] = useState([0, 100]);

  useEffect(() => {
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  // Handles the value from range-slider
  useEffect(() => {
    if (!salons && !salons.length) return;

    const filtered = salons.filter(
      (salon) => salon.cutting_price >= values[0] && salon.cutting_price <= values[1],
    );

    setFilteredSalons(filtered);

    const isFiltering = filtered.length < salons.length;
    setIsFiltered(isFiltering);
  }, [values, salons]);

  // Get min and max price from available salons.
  useEffect(() => {
    if (!salons && !salons.length) return;

    const max = getMaxPrice(salons);
    const min = getMinPrice(salons);

    setMinPrice(min);
    setMaxPrice(max);
  }, [salons]);

  const getMinPrice = (salons) => {
    const values = salons.map((salon) => salon.cutting_price);

    return Math.min.apply(null, values);
  };

  const getMaxPrice = (salons) => {
    const values = salons.map((salon) => salon.cutting_price);

    return Math.max.apply(null, values);
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
