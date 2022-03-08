import { Cliente } from "./cliente.js";

export class Carrinho{

    
    quantidade
    _cliente
    _produtos
    _valorCompra
    
    set cliente(idDoCliente){
        if(idDoCliente instanceof Cliente) this._cliente = idDoCliente
    }
    get cliente(){
        return this_cliente
    }

    constructor(cliente){
        this._cliente = cliente
    }
} 