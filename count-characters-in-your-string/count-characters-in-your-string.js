function count(string) {
  const result = {}

  string.split('').forEach((literal)=>{
    result[literal] = string.split('').filter((element)=> element===literal).length
  })

  return result;
}


console.log(count(''), {})
console.log(count('a'), {'a': 1})
console.log(count('ab'), {'a': 1, 'b': 1})
console.log(count('aba'), {'a': 2, 'b': 1})
console.log(count('ABC'), {'A': 1, 'B': 1, 'C': 1})
