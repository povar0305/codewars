function duplicateEncode(word){
  if (!word) { return word }

  let result = ''
  for(var letter of word){
    let countLetterInWord = word.split('').filter((element)=> letter.toLowerCase() == element.toLowerCase())

    if(countLetterInWord.length ==0 || countLetterInWord.length ==1){
      result = result + '('
    }else{
      result = result + ')'
    }
  }
  return result;
}


console.log("(((",duplicateEncode("din"))
console.log("()()()",duplicateEncode("recede"))
console.log(")())())",duplicateEncode("Success"))
console.log("))((",duplicateEncode("(( @"))
