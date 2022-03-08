export class Cliente {
    nome
    _Id
    _senha



    get senha(){
        return this._senha
    }
    get id(){
        return this._Id
    }
    constructor(nome ,id, senha){
            this.nome = nome
            this._Id = id
            this._senha = senha
    }


}