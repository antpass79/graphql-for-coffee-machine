import { Coffee } from "../models/coffee";

export interface CoffeeService {
    exists(name: string): boolean;
    getCoffees(): Coffee[];
    getCoffee(name: string): Coffee;
    getPrice(name: string): number;
    prepareCoffee(name: string): Coffee;
}