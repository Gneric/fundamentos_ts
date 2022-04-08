import { createProduct, calcStock, products } from './product.service'

createProduct({
  name: 'Producto1',
  createdAt: new Date(2022, 4, 1),
  stock: 10
})

createProduct({
  name: 'Producto2',
  createdAt: new Date(2022, 4, 1),
  stock: 2
})

createProduct({
  name: 'Producto3',
  createdAt: new Date(2022, 4, 1),
  stock: 5
})

console.log(calcStock())
