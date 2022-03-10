import { Carrinho } from "./carrinho.js";
import { Cliente } from "./cliente.js";
import { Produto } from "./Produto.js";


const clienteNicolas =  new Cliente("Nicolas","clienteNicolas", 5555)

const camiseta = new Produto()
camiseta.nome = "camiseta"
camiseta.quantidade = 3
camiseta.valor = 10

const calca = new Produto()
calca.quantidade = 4
calca.nome = "calca"
calca.valor = 10

const carrinho1 = new Carrinho()
carrinho1.cliente = clienteNicolas
carrinho1.addProduto(camiseta)
carrinho1.addProduto(calca)

carrinho1.removerProduto(calca)
console.log(carrinho1)