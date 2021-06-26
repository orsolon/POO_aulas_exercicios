class Pessoa {
    constructor(nome, endereco){
        this.nome = nome;
        this.endereco = endereco;
    }



    imprimePessoa(){
        console.log(`Nome: ${this.nome}, Endereço ${this.endereco}`);
    }
}

//Extends representa herança
// class Funcionario extends Pessoa {
//     constructor(nome, endereco, matricula){
//         //A palavra reservada super refer-se a classe pai.
//         super(nome, endereco);
//         this.matricula = matricula;
//     }

//     imprimeFuncionario() {
//         console.log(`Nome: ${this.nome}, Endereço ${this.endereco}, Matricula: ${this.matricula}`)
//     }
// }

// class Terceirizado extends Funcionario{

// }

// const ricardo = new Funcionario("Ricardo", "Av. Brasil", 1222);
// ricardo.imprimePessoa();
// ricardo.imprimeFuncionario();
// console.log(`${ricardo.nome} é do tipo ${typeof ricardo}`)

//_______Exercicio de Herenças__________//

// Implemente 3 classes
//  1: Funcionario
//  2: Gerente
//  3: Analista
// Atributos: salario.
// implemente um método para cálculo de bonus
// Gerentes recebem 5 salarios
// Analistas recebem 1.5 salarios.
// Utilizando herança com classes.

class Funcionario {
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }

}

class Gerente extends Funcionario {
    constructor(nome, salario){
        super(nome, salario);
        
    }

    calculoBonus() {
        return this.salario * 5
    }
}

class Analista extends Funcionario {
    constructor(nome, salario){
        super(nome, salario);
    }

    calculoBonus() {
        return this.salario * 1.5;
    }
}

const fulano = new Gerente("Fulano", 1000);
console.log(fulano);
console.log(fulano.calculoBonus());
const ciclano = new Analista("Ciclano", 300);
console.log(ciclano);
console.log(ciclano.calculoBonus());



