import { Cliente } from "./cliente.js";
import { Produto } from "./Produto.js";

export class Carrinho{

    
    _cliente
    _valorCompra
    produtos = []
    
    set cliente(idDoCliente){
        if(idDoCliente instanceof Cliente) this._cliente = idDoCliente
    }

     addProduto(novoProduto){
        if(novoProduto instanceof Produto){
        const compra = novoProduto
        this.produtos.push(compra)
    }
}
    
   
    get cliente(){
        return this_cliente
    }

    
    
    
} 