export interface Item {
  brand: string;
  title: string;
  price: number;
  discount: number;
  description: string;
  images: { image: string; thumbnail: string }[];
}

export interface CartItem {
  title: string;
  url: string;
  quantity: number;
  price: number;
}
