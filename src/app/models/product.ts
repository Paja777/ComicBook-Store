

export interface Product {
    id: string,
    title: string,
    category: "superhero" | "manga" | "graphic_novel";
    description: string,
    price: string,
    img: string,
    favorite?: false
}