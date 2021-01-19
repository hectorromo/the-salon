import { salons } from "salonData";

export default function singleSalon({ query: { slug } }, res) {
  const foundSalons = salons.filter((salon) => salon.slug === slug);

  if (foundSalons.length > 0) {
    res.status(200).json(salons[0]);
  } else {
    res.status(404).json("Salon was not found.");
  }
}
