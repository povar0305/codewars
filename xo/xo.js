function XO(str) {
  const countX = str.replace(/[^x]/gi,'').length
  const countO = str.replace(/[^o]/gi,'').length

  return countX === countO
}


console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);
