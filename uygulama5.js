const validator =  require('validator')

const sonuc = validator.isURL('www.npmjs.com')

console.log(sonuc)