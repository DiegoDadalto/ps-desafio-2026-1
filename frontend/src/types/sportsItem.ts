import { CategoryType } from "./category";

export type sportsItemType = {
    id: string;
    name: string;
    brand: string;
    price: number;
    releaseYear: number;
    image: string;
    amount: number;
    category: CategoryType;
}