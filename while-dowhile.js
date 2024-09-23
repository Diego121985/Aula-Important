
// While & do while

let p = document.querySelector("p")
let input = document.querySelector("input")
const button = document.querySelector("button")



const contacts = [
    { name: "Diego", number: "(47) 988374266" },
    { name: "Kaio", number: "(47) 989168677" },
    { name: "Tania", number: "(47) 997445396" },
]
function search(){
    for (const contact of contacts) {
        

      while (input.value === contact.name) {
     
        p.innerHTML = `Contato  encontrado ${contact.name} : ${contact.number}`
        
      }
    
    } 
}



button.addEventListener("click",search)
