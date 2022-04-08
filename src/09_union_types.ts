(() => {
  let userId : (number|string) = '1111'
  userId = 1111


  function greeting(mytext: string | number ){
    if(typeof mytext == 'string'){
      console.log(mytext.toUpperCase())
    } else {
      console.log( mytext * 4 )
    }
  }

  greeting('aaaaa')
  greeting(123)
})();
