export interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Item {
  quantity: number;
  subTotal: number;
}

export interface Cart {
  items: CartItem[];
  quantity: number;
  total: number;
}
