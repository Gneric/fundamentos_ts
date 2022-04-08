import { ProductType } from './product.model'
export const products: ProductType[] = []
export const createProduct = (data: ProductType) => {
  products.push(data)
}

export const calcStock = () : number => {
  let stock = products.reduce( (acc, cv) => {
    return acc += cv.stock
  }, 0);
  return stock
}
