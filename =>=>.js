function  sayMyName(name){
    return `Seu nome é ${name}`
    
}
const sayMyName2 = (name,myName) => {
 return`Seu nome é ${name + myName}`
 }
console.log(sayMyName("Diego"))
console.log(sayMyName2(("Diego"),("tania")))