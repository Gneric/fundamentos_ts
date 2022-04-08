(()=> {
  let prices = [1,1,2,3,4,5, 'hola', true]
  prices.push('a')
  prices.push(true)

  let products : any = ['hola', true]
  products.push(12)
  products.push('as')
  products.push(true)
  products.push({})
  products.push([])

  let numbers = [1,2,3,4,5,6]
  numbers.map(item => item * 2)
})();
