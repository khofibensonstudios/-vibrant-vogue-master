export type Product = {
  id: string;
  name: string;
  price: number;
  frontImageUrl: string;
  backImageUrl?: string;
  quantity: number;
  createdAt: { seconds: number; nanoseconds: number };
};
