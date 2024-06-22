export type Product = {
  id?: number;
  name: string;
  description?: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  quantity: number;
  brand: string;
  isAvailable: boolean;
  SKU: string;
};
export type ProductListDisplay = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  category: string;
};
export type SimplifiedData = {
  id: string | number;
  title: string;
};

export type Category = {
  id?: number;
  title: string;
  image: string;
  slug: string;
  items_count?: number;
};

export type LoginData = {
  email: string;
  password: string;
};
