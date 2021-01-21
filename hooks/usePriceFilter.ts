import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Salon } from 'types/Salon';

interface ReturnProps {
  values: number[];
  setValues: Dispatch<SetStateAction<ReturnProps["values"]>>;
  minPrice: number;
  maxPrice: number;
  isFiltered: boolean;
  filteredSalons: Salon[]
}

export default function usePriceFilter(salons: Salon[]): ReturnProps {
  const [minPrice, setMinPrice] = useState<number>(null);
  const [maxPrice, setMaxPrice] = useState<number>(null);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filteredSalons, setFilteredSalons] = useState<Salon[]>([]);
  const [values, setValues] = useState<number[]>([]);

  useEffect(() => {
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  // Handles the value from range-slider
  useEffect(() => {
    if (!salons && !salons.length) return;

    const filtered = salons.filter((salon) => parseInt(salon.cutting_price) >= values[0] && parseInt(salon.cutting_price) <= values[1]);
    const isFiltering = filtered.length < salons.length;

    setIsFiltered(isFiltering);
    setFilteredSalons(filtered);
  }, [values, salons, isFiltered]);

  // Get min and max price from available salons.
  useEffect(() => {
    if (!salons && !salons.length) return;

    const max = getMaxPrice(salons);
    const min = getMinPrice(salons);

    setMinPrice(min);
    setMaxPrice(max);
  }, [salons]);

  const getMinPrice = (salons: Salon[]): number => {
    const values = salons.map((salon) => salon.cutting_price);

    return Math.min.apply(null, values);
  };

  const getMaxPrice = (salons: Salon[]): number => {
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
