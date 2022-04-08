(() => {
  type UserID = number|string|boolean

  function greeting(mytext: UserID ){
    if(typeof mytext == 'string'){
      console.log(mytext.toUpperCase())
    }
    else if(typeof mytext == 'number') {
      console.log( mytext * 4 )
    }
    else {
      console.log(mytext)
    }
  }

  // Literal types
  type ShirtSizes = 'M' | 'L' | 'S' | 'XL' ;

  let shirtSize : ShirtSizes
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
})();
