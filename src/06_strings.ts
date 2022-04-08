(()=>{
  let productTitle = 'ProductName'
  productTitle = 'Product Name Change'
  console.log('productTitle', productTitle)

  const productDescripcion = "idk description asdas"
  console.log('productDescripcion', productDescripcion)

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescripcion}
    price: ${productPrice}
    isNew: ${isNew}
  `
  console.log(summary)
})();
