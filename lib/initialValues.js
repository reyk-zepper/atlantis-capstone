import { v4 as uuidv4 } from "uuid";

export const partList = [
  { value: "", name: "motherboard", price: "", id: uuidv4() },
  { value: "", name: "cpu", price: "", id: uuidv4() },
  { value: "", name: "gpu", price: "", id: uuidv4() },
  { value: "", name: "ram", price: "", id: uuidv4() },
  { value: "", name: "storage", price: "", id: uuidv4() },
  { value: "", name: "pcu", price: "", id: uuidv4() },
  { value: "", name: "cooling", price: "", id: uuidv4() },
  { value: "", name: "case", price: "", id: uuidv4() },
];

export const partList2 = [
  {
    value: "ASRock X670E Taichi Carrara",
    name: "motherboard",
    price: 600,
    id: uuidv4(),
  },
  { value: "AMD Ryzen 9 7950X", name: "cpu", price: 600, id: uuidv4() },
  {
    value: "Gigabyte RTX 4080 16GB Aero",
    name: "gpu",
    price: 1500,
    id: uuidv4(),
  },
  {
    value: "Corsair Dominator Platinum 64GB",
    name: "ram",
    price: 330,
    id: uuidv4(),
  },
  {
    value: "Samsung 980 Pro M.2 2TB",
    name: "storage",
    price: 150,
    id: uuidv4(),
  },
  {
    value: "1000W bequite Straight Power 80+ Platinum",
    name: "pcu",
    price: 200,
    id: uuidv4(),
  },
  { value: "Nocutua NH-D15", name: "cooling", price: 110, id: uuidv4() },
  { value: "Lian Li O11Dynamic XL", name: "case", price: 265, id: uuidv4() },
];
