(()=> {
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const createProductoJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductoJson('P1', new Date(), 1)
  console.log(producto1)
})();
