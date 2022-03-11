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
    alterarQuantidadeNoCarrinho(alterarProduto,quantidadeAlterada){
        var newArray 
        var novaQuantia 
        var index
        if(alterarProduto instanceof Produto)
        index = this.produtos.indexOf(alterarProduto)
        this.produtos[index].quantidade = quantidadeAlterada
        return this.produtos
          
    }
    removerProduto(itemARemover){
       var newArray
       var novoValorCompra
       if(itemARemover instanceof Produto)
       newArray = this.produtos.filter((item) => item !== itemARemover)
       this.produtos = newArray
       novoValorCompra = this._valorCompra - itemARemover.valor
       this._valorCompra = novoValorCompra
       return this.produtos, this._valorCompra
   }


}