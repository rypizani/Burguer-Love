export interface IProduct {
  id: number
  name: string
  image: string
  price: number
  information: string
}

export interface Category {
  id: string;
  name: string;
}

export interface IUserContext {
  addCart: (product: IProductCart) => void
  deleteProduct: (id: number) => void
  removeQuantity: (id: number) => void
  addQuantity: (id: number) => void
  cleanCart: () => void
}

export type ProductType = 'Burger' | 'Salad' | 'Soda' | 'Dessert' | 'Breakfast'
