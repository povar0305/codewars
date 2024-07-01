var uniqueInOrder=function(iterable){
  const result = []

  for (var index = 0; index < iterable.length; index++){

    if (iterable[index]!=iterable[index+1]){
      result.push(iterable[index])
    }
  }

  return result
}

console.log(uniqueInOrder('aA'), ['a','A'])
console.log(uniqueInOrder(''), [])
console.log(uniqueInOrder('AAAABBBCCDAABBB'),['A', 'B', 'C', 'D', 'A', 'B'])
console.log(uniqueInOrder('ABBCcAD')        ,['A', 'B', 'C', 'c', 'A', 'D'])
console.log(uniqueInOrder([1,2,2,3,3])      ,[1,2,3])
