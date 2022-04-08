( () => {
  const calcTotal = (prices : number[]) => {
    let total = prices.reduce( (all, v) => {
      return all+=v
    })
    return total
  }

  const rta = calcTotal([1,2,3,3,4])
  console.log(rta)

  const printTotal = (prices : number[]) => {
    const rta = calcTotal(prices)
    console.log(rta)
  }

  printTotal([1,2,3,3,4])

  type DataType = { email: string, password: number }
  const login = (data : DataType) => {
    console.log(data.email, data.password)
  }
  login({ email: 'oscar@b', password: 111111 })

  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type DataProductType = { title: string, createdAt: Date, stock: number, size?: Sizes }
  let products : DataProductType[] = []
  const addProduct = (data : DataProductType) => {
    products.push(data)
  }
})();
