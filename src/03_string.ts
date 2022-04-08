(()=> {
  let myProductName = 'Product 1'
  let myProductPrice = 10.50

  myProductName = 'Cambio'
  myProductName.toLocaleLowerCase()
  myProductPrice.toFixed()

  // Constante no necesita tipo
  // inferido por que igual no puede cambiar
  const myProductStock = 1000
  const myProductName2 = 'Product 2'
})();

