export interface Product {
  id: number,
  price: number,
  images: Array<string>,
  stock: number,
  title: string,
  description: string,
  quantity: number,
  discountPercentage: number,
  rating: number,
  brand: string,
  category: string,
}
