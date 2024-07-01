function order(words){
  let result=[]
  words.split(' ').map((word)=>{
    result[word.replace(/\D+/g, '')] = word
  })

  return result.filter(Boolean).join(' ')
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "", "empty input should return empty string" )
