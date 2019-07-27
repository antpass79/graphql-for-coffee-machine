export interface Coffee {
    name: string;
    available: boolean;
    sugar: number;
    milk: number;
    price: number;
}

export type Query = {
    coffees: Coffee[];
    price: number;
    coffee: Coffee;
  }
  