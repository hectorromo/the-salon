import { salons } from "salonData";

export default function singleSalon({ query: { id } }, res) {
  const foundSalons = salons.filter((salon) => salon.slug === id);

  if (foundSalons.length > 0) {
    console.log("THE SLUG", id, foundSalons);
    res.status(200).json(salons[0]);
  } else {
    res.status(404).json("Salon was not found.");
  }
}
