/*const  myName = "Rodolfo"
const users =['João','Maria','Leticia']

for (const nnnn of users) {
    console.log(nnnn)
}*/

let p = document.querySelector("p")
let input = document.querySelector("input")



const contacts = [
    { name: "Diego", number: "(47) 988374266" },
    { name: "Kaio", number: "(47) 989168677" },
    { name: "Tania", number: "(47) 997445396" },
]
function search(){
    for (const contact of contacts) {
        if(input.value.toLowerCase() === contact.name.toLowerCase()){
            p.innerHTML = `Contato encontrado: Nome: ${contact.name} Tel: ${contact.number}`
            break
        }else{
            p.innerHTML = 'Contato não enconterado'
        }
        
    }
}

/*let p = document.querySelector("p")
let input = document.querySelector("input")
const button = document.querySelector("button")




const contacts = [
    { name: "Diego", number: "(47) 988374266" },
    { name: "Kaio", number: "(47) 989168677" },
    { name: "Tania", number: "(47) 997445396" },
]
function search(){
    for (const contact of contacts) {
        if(input.value.toLowerCase() === contact.name.toLowerCase()){
            p.innerHTML = `Contato encontrado = ${contact.name} Tel: ${contact.number}` 
            break

        }else{
            p.innerHTML =' Contato não encontrado'
        }
        
    }
}

button.addEventListener("click",search)*/

