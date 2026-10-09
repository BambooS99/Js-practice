export type TItem = {
  id: string;
  name: string;
  price: number;
};

export type TStore = {
  id: string;
  name: string;
  distance: number;
  inventory: TItem[];
};
