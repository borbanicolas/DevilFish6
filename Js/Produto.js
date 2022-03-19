import { Carrinho } from "./Carrinho.js"

export class Produto{
    nome
    categoria
    cor
    descricao
    valor
    quantidade = 0  
    

    constructor(nome, categoria, cor, descricao,valor, quantidade){
        this.nome = nome
        this.categoria = categoria
        this.cor = cor
        this.descricao = descricao
        this.valor = valor
        this.quantidade = quantidade

    }

}