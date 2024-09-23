
// ForEach (item , index , array)

const users = [
{name : "Diego", age: 39, contact:"(47) 988374266"},
{name : "Tania", age: 43, contact:"(47) 997435396"},
{name : "Kaio", age: 17, contact:"(47) 988374266"},
{name : "Gabriela", age: 24, contact:"(47) 988374266"},
]
users.forEach((item,index,array)=> {
    console.log(` ${index +1}  Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
    
});




