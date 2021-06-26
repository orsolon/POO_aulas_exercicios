//_____________Exercicio Classe com atributo Privado________

// Crie uma classe chamada Círculo. Ela terá como atributo:
// Raio - Privado!
// Crie 2 métodos:
// calculaArea = Pi x Raio ^2
// calculaPerimetro = 2 x Pi x 5

// Dicas:
// Math.pow(base, expoente)


// calcula = (e) => {
//     console.log(e.target.value);
//     e.preventDefault();
// }

class Circulo {
    constructor(r) {
        let raio = r;

        this.calculaArea = function () {        //pode usar arrow function
            return Math.PI*raio*raio;
            //return Math.PI*Math.pow(raio);
        };

        this.calculaPerimetro = function () {
            return 2 * Math.PI * raio;
        };
    }
}

const circulo = new Circulo(10);
console.log(`A Area do circulo é: ${circulo.calculaArea().toFixed(2)}`);
console.log(`O perimetro do circulo é: ${circulo.calculaArea().toFixed(2)}`);
console.log(circulo.raio);



// class Circulo {
//     constructor(raio) {
//         this._raio = raio;
//     }

//     get raio() {
//         return this._raio;
//     }

//     set raio(raio) {
//         this._raio = raio
//     }

//     calculaArea(raio) {
//         return Math.PI*Math.pow(raio);
//     }

//     calculaPerimetro(raio) {
//         return 2 * Math.PI * raio
//     }
// }




// const raio2 = new Circulo(2);
// raio2.imprimeCirculo();


// class Retangulo {
//     #altura;
//     #largura;
  
//     constructor(altura, largura) {
//       this.#altura = altura;
//       this.#largura = largura;
//     }
  
//     get area() {
//       return this.#altura * this.#largura;
//     }
//   }
  
//   const ret = new Retangulo(3, 5);
//   console.log('area:', ret.area);


// ______Metodos de Acesso Exercicio _______________

// Criar a classe cilindro.
// A classe cilindro tem 2 atributos: raio e altura.
// A classe terá um unico método chamado calculaVolume -> area * altura
// Deve ser feito com métodos de acesso -> get e set.

class Cilindro {
    constructor(raio, altura){
        this._raio = raio;
        this._altura = altura;
    }

        get raio() {
            return this._raio;
        }

        set raio (raio) {
            if(raio<0){
                throw "Raio precisa ser maior maior que zero";
            }
            this._raio = raio;
        }

        get altura() {
            return this._altura;
        }

        set altura(altura) {
            this._altura = altura;
        }

        calculaVolume() {
            return Math.PI*this._raio*this._raio*this.altura;
        }
}

const cilindro = new Cilindro(10, 20);
console.log(`O volume do cilindro: ${cilindro.calculaVolume().toFixed(2)}`);
cilindro.altura = 20;
cilindro.raio = 15;
console.log(`O volume do cilindro: ${cilindro.calculaVolume().toFixed(2)}`);


