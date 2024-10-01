/* Map : Oo metodo map serve para mapear um array.Mapear? Sim  , com map , você pode  percorrer posição por posição de array . alterando tudo que você quiser do array original  
O map aceita de 3 parâmetros : 
const novoArray = arrayOriginal.map((valorAtual, indice, arrayOriginal => xxx))

1 O map vai passar po todos os items do array , eo primeiro parâmetro é cada item, um por vez do array que estamos mapeando. Item  OPCIONAL.
2 O indice e posição atuAL estamos mapeando. Item OPCIONAL. 
3 Uma cópia do arra original. Item OPCIONAL*/

/*const number = [1,2,3,4,5,6,7]

const double = number.map((item) => item * 2)

const list = [
    {name: "Diego", vip:true},
    {name: "Maria", vip:false},
    {name: "João", vip:true},
    {name: "Carla", vip:false},
    {name: "Ana", vip:true},
    {name: "Julio", vip:true},
    
]
const newList = list.map((user) => {
    return{ 
        name : user.name,braceletColor: user.vip ? "black" : "green"
         
    } 
})
const students = [
    {name:"Diego", testGrade: 7},
    { name:"Maria", testGrade: 7},
    {name:"João", testGrade: 7},
    {name:"Bruno", testGrade: 7},
    {name:"Carla", testGrade: 4},
    {name:"Ana", testGrade: 3},
    {name:"Julio", testGrade: 7}
] 
 const studentsNote = students.map(note => {

        return{
           name: note.name,
           studentStatus:note.testGrade >= 5 ? "Promovido" : "Reprovado"
        }
 })
const cart = [
    {productName : "Abóbora", pricePerkg: 5 ,kg: 1},
    {productName : "Pepino", pricePerkg: 3.55, kg: 1.3},
    {productName : "Limão", pricePerkg: 1.2, kg: 2},
    {productName : "Abacate", pricePerkg: 5.4, kg: 1.67},
    {productName : "Morango", pricePerkg: 11.9, kg: 3}
   
]
const cartValue = cart.reduce((acc, value) => { 
    return acc + value.pricePerkg.toFixed() * value.kg.toFixed()
   
},0) */

/*const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000] 

 const newList = list.filter(eu => eu > 10 && eu % 2  )
 console.log(newList) */

 const companies = [
    {name: "Sansung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938},
   { name: "Microsoft",
    marketValue: 415,
    CEO:"Satya Nadalla",
    foundedOn: 1975
},
{name:"Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968},
{
name : " Facebook",
marketValue : 383,
CEO : "Mark Zckerberg",
foundedOn : 2004,

},


{name: "Spotify" , marketValue: 30 , CEO: "Daniel Ek", foundedOn: 2006},
{name:"Apple", marketValue: 845, CEO: "Tim CooK ", foundedOn: 1976},


 ]
 /*const newCompanies = companies.map( company => {
     company.marketValue = company.marketValue + company.marketValue / 10
 return company
})
 .filter((company) => company.foundedOn < 1990)
 .reduce((acc, company) => acc + company.marketValue,0)

console.log(newCompanies)
// Subtrair 10% de valor de mercado  a todas as compahias 
// Filtrar somente compahias fundadas depois de 1980
// Somar o valor de mercado das restantes*/
 
const newCopanies = companies.map((company) => {
    company.marketValue -= company.marketValue * 0.10
    return company

    
})

.filter((company) => company.foundedOn >1980)
.reduce((acc,company) => acc + company.marketValue,0)


// PUSH Acrecenta algo mais
const myArray = [1,2,3]
  
myArray.push(4)
myArray.push('abacate')

// (SORT) deixar organizado o meu codigo 

const myArray = ["Limão","abóbora"," caqui"]
  
myArray.sort()


// DELETE UM ITEM DO MEU ARRAY





