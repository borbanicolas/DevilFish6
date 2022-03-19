import { Carrinho } from "./carrinho.js";
import { Cliente } from "./cliente.js";
import { Produto } from "./Produto.js";


const clienteNicolas =  new Cliente("Nicolas","clienteNicolas", 5555)



const camiseta = new Produto("camiseta", "roupa", "vermelho", "M", 10, 1)

const calca = new Produto("calca", "roupa", "azul", "calca jeans", 75, 1)

const jaqueta = new Produto("jaqueta", "roupa", "preto", "jaqueta jeans preta", 110, 1)




const carrinho1 = new Carrinho()
carrinho1.cliente = \
carrinho1.addProduto(camiseta)
carrinho1.addProduto(calca)
carrinho1.addProduto(jaqueta)

carrinho1.removerProduto(calca)
carrinho1.alterarQuantidadeNoCarrinho(jaqueta, 300 )
carrinho1.alterarQuantidadeNoCarrinho(camiseta, 20)

console.log(carrinho1)


