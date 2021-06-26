class Hospital {
    constructor(cnpj, endereco){
        this._cnpj = cnpj;
        this._endereco = endereco;
    }

    get cnpj(){
        console.log("entrou no get CNPJ");
        return this._cnpj;
    }

    set cnpj(cnpj) {
        console.log("entrou no set CNPJ");
        this._cnpj = cnpj;
    }
}

const samaritano = new Hospital (1111, "Conselheiro Brotero");
samaritano.cnpj = "2222";
console.log(samaritano.cnpj);