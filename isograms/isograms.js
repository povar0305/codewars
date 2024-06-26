function isIsogram(str){
  for (const letter of str){
    if(str.split('').filter((element)=> element.toLowerCase() === letter).length>1){
      return false
    }
  }

  return true
}

console.log(true, isIsogram("Dermatoglyphics"))
console.log(false, isIsogram("isogram"))
console.log(false, isIsogram("aba"))
console.log(false, isIsogram("moOse"))
console.log(true, isIsogram("isIsogram"))
