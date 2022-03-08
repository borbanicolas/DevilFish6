import { Carrinho } from "./carrinho.js";
import { Cliente } from "./cliente.js";


const clienteNicolas =  new Cliente("Nicolas","clienteNicolas", 5555)


const compra1 = new Carrinho(clienteNicolas)


console.log(compra1)


