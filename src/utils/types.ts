export type Product = {
  name: string;
  description?: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  quantity: number;
  isAvailable: boolean;
  SKU: string;
};
export type SimplifiedData = {
  id: string | number;
  name: string;
};
