(() => {
  let productPrice = 100;
  productPrice = 120;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;

  // Show de error si se intenta trabajar con una variable sin valor
  let productInStock: number = 10;
  console.log('productInStock', productInStock)
  if(productInStock > 10){
    console.log('is greater')
  }

  let discount = parseInt('asdd');
  console.log('Discount', discount)
  if (discount <= 200){
    console.log('apply')
  } else {
    console.log('not apply')
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b101010100;
  console.log('bin', bin);

  const myNumber: number = 10
})();
