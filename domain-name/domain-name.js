function domainName(url){

  if(url.includes('//')){
    if(url.includes('www')){
      return url.split('//')[1].split('.')[1]
    }
    return url.split('//')[1].split('.')[0]

  } else if (url.includes('www')){
    return url.split('.')[1]
  }

  return url.split('.')[0]
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("r8opqmlokjlxpdp5pw4rw7jcnm873g.pro/index.php"), "r8opqmlokjlxpdp5pw4rw7jcnm873g");
console.log(domainName("https://www.iv6kwhs70.br/img/"), "iv6kwhs70");
