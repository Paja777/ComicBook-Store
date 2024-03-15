export interface Product {
  _id: string;
  title: string;
  category?: string;
  description?: string;
  price: number;
  img?: string;
  rating?: number;
  stock?: number;
  productId?: string;
  amount?: number;
}
