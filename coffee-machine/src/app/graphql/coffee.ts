export interface Coffee {
    name: string;
    available: boolean;
    sugar: number;
    milk: number;
    coffeePowder: number;
    price: number;
    custom: boolean;
}

export type Query = {
    coffees: Coffee[];
    price: number;
    coffee: Coffee;
  }
  
export type Mutation = {
    create: Coffee
}
