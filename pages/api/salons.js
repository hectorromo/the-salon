import { salons } from "salonData";

export default function allSalons(req, res) {
  res.status(200).json(salons);
}
