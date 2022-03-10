import { Cliente } from "./cliente.js";
import { Produto } from "./Produto.js";

export class Carrinho{

    
    _cliente
    _valorCompra = 0
    produtos = []
    
    set cliente(idDoCliente){
        if(idDoCliente instanceof Cliente) this._cliente = idDoCliente
    }

    
    get cliente(){
        return this_cliente
    }
    get valorCompra(){
         return this._valorCompra
     }



    addProduto(novoProduto){
        if(novoProduto instanceof Produto){
        this.produtos.push(novoProduto)
        this._valorCompra += novoProduto.valor * novoProduto.quantidade

        }
    }

   removerProduto(itemARemover){
       var newArray
       newArray = this.produtos.filter((item) => item !== itemARemover)
       this.produtos = newArray
       return this.produtos
   }
    

}