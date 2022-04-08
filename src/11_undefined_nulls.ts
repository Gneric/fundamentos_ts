(()=> {
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString : string | undefined = undefined;
  myString = 'asd';

  function hi(name: string | null){
    let h = 'Hola ';
    if (name){
      h += name
    } else {
      h+= ' nobody'
    }
  }
  // ^ pero mejor
  function hi2(name: string | null){
    let h = 'Hola ';
    h += name?.toLocaleLowerCase() || 'nobody'
    console.log(h)
  }
  hi2('Oscar')
  hi2(null)
})();
