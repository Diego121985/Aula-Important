/*const numeros = [1,2,3,4,5]
const dobro = numeros.map((numero , index, arrayCompleto) =>{
    console.log(arrayCompleto)
    ? if
    : else
    REDUCE (Reduzir o array a único valor)
    -Reduz um array inteiro a um unico valor
    -Você tem acesso  a 4 dados:
    -Acumulador
    -Valor atual 
    -Posição atual  
    -Array Completo


})*/
/*const produtos = [
    {
        id: 1,
        nome: "Smartphone Galaxy Smartphone S21",
        preco: 3999.99,
        temDesconto: true,
        quantidade: 1 ,
    },

    {
        id: 2,
        nome: "Notebook Dell Inspiron",
        preco: 4500.00,
        temDesconto: false,
        quantidade: 3,
    },


    {
        id: 3,
        nome: "Smart TV LG 55",
        preco: 2799.00,
        temDesconto: true,
        quantidade: 5,
    },

    {
        id: 4,
        nome: "fone de Ouvido Bluetooth JBL",
        preco: 299.90,
        temDesconto: false,
        quantidade: 2,
    },

    {
        id: 5,
        nome: "Camera DLSR Canon",
        preco: 3200.00,
        temDesconto: true,
        quantidade: 1,
    },

    {
        id: 6,
        nome: "Tablet iPad Air",
        preco: 4199.00,
        temDesconto: false,
        quantidade: 8,
    },

    {
        id: 7,
        nome: "cosole PlayStation 5",
        preco: 4699.99,
        temDesconto: true,
        quantidade: 2,
    },

    {
        id: 8,
        nome: "Smartwatch Apple Watch",
        preco: 2499.00,
        temDesconto: false,
        quantidade: 7,
    },

    {
        id: 9,
        nome: "Impressora HP Multifuncional",
        preco: 599.90,
        temDesconto: true,
        quantidade: 5,
    },

    {
        id: 10,
        nome: "Caixa de Som Portátion Sony",
        preco: 1000.00,
        temDesconto: false,
        quantidade: 3,
    },

];
//CRIAR UM NOVO ARRAY FORMATANDO A MOEDA E DANDO DESCONTO AOS CRIENTES//


/*const novosProdutos = produtos.map(meuProduto => {

    const novoPreco = meuProduto.temDesconto ? meuProduto.preco * 0.9: meuProduto.preco

    return {

        id: meuProduto.id,
        nome: meuProduto.nome,
        preco: novoPreco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        }),
        quantidade: meuProduto.quantidade
    }
},0)
console.log(novosProdutos)

//QUAL SERÁ O FATURAMENTO SE VENDERMOS TODO OS ESTOQUES//
/*const numeros = [1,2,3,4,5]

const soma = numeros.reduce((acumulador,atual) => {
    const total = acumulador + atual

    return total
},1)
console.log(soma)*/

/*const totalVendas = produtos.reduce((acumulador,meuProduto) =>{
     
    return acumulador + (meuProduto.preco * meuProduto.quantidade)
},0)
console.log(totalVendas.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
}),)




/*Filter(Filtrar o array )
-Criar um novo array filtrado os valores desejados do array original
-vOCÊ  tem acesso a 3 dados : 
-Item por item do Array 
-Array Completo*/
/*const promocao = produtos.filter( produto => produto.temDesconto)

console.log(promocao)*/

//Adicionar + 10 em cada produto 
// Filtrar só os em promoção 
// Saber qual é o faturaramento se vendermos todas em promoção 


/*const faturamentoTotal = produtos.map(produto => {
    return { ...produto, quantidade: produto.quantidade + 10}
})
.filter((produto) => produto.temDesconto)
.reduce((acumulador,produto) => acumulador + produto.quantidade * produto.preco,0)

console.log(faturamentoTotal.toLocaleString("pt-br" ,
    {
        style:"currency",
        currency:"BRL"
    }
))*/
/*const novosProdutos = produtos.map(meuProduto => {

    const novoPreco = meuProduto.temDesconto ? meuProduto.preco * 0.9 : meuProduto.preco

    return{id: meuProduto.id,
        nome: meuProduto.nome,
        preco: novoPreco.toLocaleString("pt-br",{
            style:"currency",
            currency:"BRL"
        }),
        quantidade: meuProduto.quantidade
    }
},4)
console.log(novosProdutos)

const  somaDosProdutos = produtos.reduce((acumulador,meuProduto) =>{

    return acumulador + (meuProduto.preco * meuProduto.quantidade)


},0)

console.log(somaDosProdutos.toLocaleString("pt-br",{
    style:"currency",
    currency:"BRL"
}))

const promocao = produtos.filter(meuProduto => meuProduto.temDesconto)

console.log(promocao)*/

/*
const faturamentoTotal = produtos.map((meuProduto) =>{
    return { ... meuProduto,quantidade : meuProduto.quantidade + 10,}
 
    
})
 .filter( (meuProduto) => meuProduto.temDesconto,)
 .reduce(( acumulador,meuProduto) => acumulador  + (meuProduto.quantidade * meuProduto.preco), 0)
 
  
console.log(faturamentoTotal.toLocaleString("pt-br",{
    style:"currency",
    currency:"BRL"
})

)*/





