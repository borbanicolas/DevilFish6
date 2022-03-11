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
        for (var i = 0; i < this.produtos.length; i++) {
            this.produtos[i][00] = this.produtos[i]['name'];
            delete this.produtos[i]['name'];
          }
          
    }






    //  alterarQuantidadeNoCarrinho(_item, quantidadeAlterada){
 //       this.produtos.apply(_item => {
  //          _item.quantidade = quantidadeAlterada;
   //       });
   //       console.log(this.produtos)
  //     
 //   }









   removerProduto(itemARemover){
       if(itemARemover instanceof Produto)
       var newArray
       var novoValorCompra
       newArray = this.produtos.filter((item) => item !== itemARemover)
       this.produtos = newArray
       novoValorCompra = this._valorCompra - itemARemover.valor
       this._valorCompra = novoValorCompra
       return this.produtos, this._valorCompra
   }


}