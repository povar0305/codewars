function solution(string) {
  if(!string) { return ''}
  return string.split('').map((element)=>{ if(element.toLowerCase() !==element){
      element = ' '+ element
    }
      return element
    }
  ).join('')
}

console.log(solution(""), "");
console.log(solution("camelCasing"), "camel Casing");
console.log(solution("camelCasingTest"), "camel Casing Test");
