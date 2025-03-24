export default interface IProduct {
  id: string
  name: string
  price: number
  sale_price: number
  status: boolean
  image: string
  category: string
  rating: number
}

export type ProductAdd= Omit<IProduct,"id"|"sale_price"|"rating">