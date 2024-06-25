const vowels = ['a', 'e','i', 'o', 'u']
function disemvowel(str='') {
  if(!str) { return str}

  let result = ''
  for(const letter of str){
    if(!vowels.includes(letter.toLowerCase())){
      result= result + letter
    }
  }

  return result;
}

console.log("This website is for losers LOL!",disemvowel("This website is for losers LOL!"))
console.log("No offense but,\nYour writing is among the worst I've ever read",disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
console.log("What are you, a communist?",disemvowel("What are you, a communist?"))
console.log("NcPFrByPeANIje",disemvowel("NcPFrByPeANIje"))
console.log("SSatJn wCoaUQy oolYAr DcPrhu GHF ICI IBDEcIZOZyIAW LFA",disemvowel("SSatJn wCoaUQy oolYAr DcPrhu GHF ICI IBDEcIZOZyIAW LFA"))
console.log("wziwqOr yELIkrvnaMSvzPa uzlYjWMEIwjJs sOASejjI dijlXHGmwOCoYeeebU nvNKpETAzvZKmKMtEA AYdUQiBgucMf iyAfouHBpDrbXkNg odEEjBFabaOaOavYae HOACmyatCrAimhIDeCtO",disemvowel("wziwqOr yELIkrvnaMSvzPa uzlYjWMEIwjJs sOASejjI dijlXHGmwOCoYeeebU nvNKpETAzvZKmKMtEA AYdUQiBgucMf iyAfouHBpDrbXkNg odEEjBFabaOaOavYae HOACmyatCrAimhIDeCtO"))
