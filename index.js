import { Carrinho } from "./carrinho.js";
import { Cliente } from "./cliente.js";
import { Produto } from "./Produto.js";


const clienteNicolas =  new Cliente("Nicolas","clienteNicolas", 5555)

const camiseta = new Produto()
camiseta.nome = "camiseta"
camiseta.valor = 10

const calca = new Produto()
calca.nome = "calca"
calca.valor = 10

const carrinho1 = new Carrinho()
carrinho1.addProduto(camiseta)
carrinho1.addProduto(calca)

console.log(carrinho1)