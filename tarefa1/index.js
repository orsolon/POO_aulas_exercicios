
// Questão 1
// Crie uma classe Cliente cujos atributos são nome, idade e e-mail. Construa um método que imprima as informações tal como abaixo:
// Nome: Fulano de Tal
// Idade: 40
// E-mail: fulano@mail.com


class Cliente {
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    imprimir() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Email: ${this.email}`)
    }
}
const clienteNovo = new Cliente ("Fulano de Tal", 40, "fulano@mail.com");
clienteNovo.imprimir();


// Questão 2
// Crie uma classe Bola cujos atributos são cor e raio. 
//Crie um método que imprime a cor da bola. 
//Crie um método para calcular a área dessa bola. 
//Crie um método para calcular o volume da bola. 
//Crie um objeto dessa classe e calcule a área e o volume, imprimindo ambos em seguida.
// Área da esfera = 4*3.14*r*r;
// Volume da esfera = 4*3.14*r*r*r/3
 
class Bola {
    constructor(cor, raio){
        this.cor = cor;
        this.raio = raio;
    }

    imprimeCor(){
        console.log(`A cor da bola é ${this.cor}`)
    }

    calcularArea(){
        return 4*3.14*this.raio*this.raio;
    }

    calcularVolume(){
        return 4*3.14*this.raio*this.raio*this.raio/3
    }
}

const bolaDebora = new Bola ("azul", 3);
console.log(bolaDebora);
bolaDebora.imprimeCor();
console.log(`A area da bola é ${bolaDebora.calcularArea().toFixed(2)} 
e o volume ${bolaDebora.calcularVolume().toFixed(2)}`)

// Questão 3
// Crie uma classe Retângulo cujos atributos são lado_a e lado_b. 
// Crie um método para calcular a área desse retângulo. 
// Crie um objeto dessa classe e calcule a área e a imprima em seguida.


class Retangulo {
    constructor(lado_a, lado_b) {
        if(isNaN(lado_a) || isNaN(lado_a)) throw "base e altura precisam ser números";  
        this.lado_a = lado_a; this.lado_b = lado_b;
    }
  
    calculaArea() {
        return this.lado_a * this.lado_b;
    }
}

const retangulo = new Retangulo(8, 10);

console.log(retangulo.calculaArea());

// Lista 2 - Encapsulamento _____________

// Crie uma classe Conta que representa uma conta bancária cujo saldo e senha de acesso 
// são informações privadas (protegidas). 
// Adicione também os métodos depositar e sacar.

class Conta {
    constructor(numeroConta, titular, balance, password){
        this.numeroConta = numeroConta;
        this.titular = titular;
        let saldo = balance;
        let senha = password;

        this.depositar = function (valorDeposito) {
             saldo+=valorDeposito;
             return console.log("depositou");
        };

        this.sacar = function (valor) {
            if (valor < saldo) {
                saldo-=valor;
            }
            return console.log("sacou");
        }
    }
}

const minhaConta = new Conta (123321, "Debora", 100, 789);
console.log(minhaConta);
minhaConta.depositar();
minhaConta.sacar();

//lista Herança
// Questão 1
// Crie uma classe chamada Retangulo que deve possuir os atirbutos privados base e altura, 
// e, além do construtor, crie um método chamado calcularArea() que retorna a área desse 
// retângulo multiplicando base por altura.

class Quadrado {
    constructor(base, altura) {
        let tamanhoBase = base;
        let tamanhoAltura = altura;

        this.calcularArea = function () {
            return tamanhoBase * tamanhoAltura;
        }
    }
}

const quadrado = new Quadrado (20,20);
console.log(quadrado.calcularArea());

// Crie uma classe chamada Cubo que herda da classe Quadrado da questão anterior, 
// e tem como atributo adicional o comprimento. Crie, além do construtor, 
// um método chamado calcularVolume que deve fazer uso do método calcularArea da super classe, 
// multiplicando o retorno desse método pelo valor de comprimento para obter o volume final.

class Cubo extends Quadrado{
    constructor(base, altura, comprimento){
        super(base,altura);
        this.comprimento = comprimento;

        this.calcularVolume = function () {
            return this.calcularArea() * this.comprimento;
        }
    }

}

const cubo = new Cubo (10,10, 20);
console.log(cubo);
console.log(cubo.calcularVolume());

// Crie uma classe chamada Ponto2D que possui os atributos x e y (ambos privados), 
// crie o construtor dessa classe e um método calcularDistancia() 
// que recebe como parâmetro uma outra instância de Ponto2D.

// A fórmula para calcular a distância entre dois pontos 
// (considerando xp1 a coordenada x de um ponto e xp2 a coordenada x do outro ponto 
// envolvido (e o mesmo valendo para y) é dada pela raiz quadrada de ((xp1 - xp2)² + (yp1 -yp2)²).

class Ponto2D {
    constructor(x, y){
        let pontox = x;
        let pontoy = y;

        this.getX = () => pontox;
        this.getY = () => pontoy;

        // this.calcularDistancia = function (a,b) {
        //     const dx = a.pontox - b.pontox;
        //     const dy = a.pontoy - b.pontoy;
        //     return Math.hypot(dx, dy);
    }

    calcularDistancia(ponto) {
        const delta_x = Math.pow(this.getX() - ponto.getX(),2);
        const delta_y = Math.pow(this.getY() - ponto.getY(),2);
        return Math.sqrt(delta_x + delta_y);
    }
}


// const p1 = new Ponto2D(5, 5);
// const p2 = new Ponto2D(10, 10);
// p1.calcularDistancia();
// p2.calcularDistancia();
// console.log(Ponto2D.calcularDistancia(p1, p2));



// Crie uma classe que herda de Ponto2D chamada Ponto3D que tem como atributo adicional "z", 
// reimplemente o método calcularDistancia() na classe Ponto3D que desta vez 
// deve receber uma outra instância de Ponto3D. O cálculo da distância entre dois pontos 3D 
// (considerando xp1 a coordenada x de um ponto e xp2 a coordenada x do outro ponto envolvido (
//     e o mesmo valendo para y e z) é dada pela raiz quadrada de 
//     ((xp1 - xp2)² + (yp1 -yp2)² + (zp1 - zp2)²).

class Ponto3D extends Ponto2D {
    constructor(x, y, z) {
        super(x, y);
        let pontoz = z;

        this.getZ = () => pontoz;

        // this.calcularDistancia = function (a,b) {
        //     const dx = a.pontox - b.pontox;
        //     const dy = a.pontoy - b.pontoy;
        //     const dz = a.pontoz - b.pontoz;
        //     return Math.hypot(dx, dy, dz);
        }

        calcularDistancia(ponto) {
            const delta_x = Math.pow(this.getX() - ponto.getX(),2);
            const delta_y = Math.pow(this.getY() - ponto.getY(),2);
            const delta_z = Math.pow(this.getZ() - ponto.getZ(),2);
            return Math.sqrt(delta_x + delta_y + delta_z);
        }

}


//Simulação Browser API | JS

// Crie uma classe chamada HTMLBaseElement que deve possuir os atributos:
// - tagName: string
// - id: string
// - classList: string[]
// - name: string
// - style: object
// Todos os atributos são privados, e devem ser feitas as validações conforme o tipo de cada valor especificado acima.
// No construtor da classe, fora o valor para tagName, nenhum é obrigatório, os valores default de cada atributo não obrigatório devem ser:

// id: undefined
// classList: []
// name: undefined
// style: {}
// O atributo classList deverá poder ser manipulado através de um método addClass(className: string) que deve adicionar a 
//classe passada como parâmetro no array em questão, 
//e o método removeClass(className: string) para remover uma classe do array.

class HTMLBaseElement {
    constructor(tagName){
        if(typeof _tagName != 'string') throw "tagName precisa ser string";
        let _tagName = tagName;
        if(typeof id != 'string') throw "id precisa ser string";
        let id = undefined;
        if(typeof classList != 'string') throw "classList precisa ser string";
        let classList = [];
        if(typeof name != 'string') throw "name precisa ser string";
        let name = undefined;
        if(typeof style != 'object' ) throw "style precisa ser um objeto";
        let style = {};

        this.addClass = function(className) {
            classList.push() = className;
        }
        this.removeClass = function(className) {
            classList.pop() = className;
        }
    }
}

const teste = new HTMLBaseElement('div');





// Crie uma classe chamada HTMLParentElement que deve herdar de HTMLBaseElement e conter o atributo 
// adicional:
// children: HTMLBaseElement[]
// O atributo children deve ser populado através de um método appendChild(child: HTMLBaseElement) 
// que deve adicionar um objeto de HTMLBaseElement no array em questão e um método para remover 
// itens desse array removeChildBy(property: string, value: any) que deve usar o valor de property 
// para buscar uma propriedade nos itens do array com valor igual à value.


class HTMLParentElement extends HTMLBaseElement {
    constructor(){

    }
}


// Crie uma classe chamada HTMLInputElement que herda de HTMLBaseElement contando com os atributos 
// adiconais:
// + value: any
// + type: string
// Todos os atributos são públicos, no entanto, caso seu valor seja definido não sendo um entre 
// 'text', 'email', 'password', 'date', 'color' ou 'number' o programa deve "lançar" um erro usando o throw, 
// o mesmo vale para caso o valor passado não seja uma string.

class HTMLInputElement extends HTMLBaseElement {
        constructor(){

        }
}

// Crie uma classe chamada HTMLButtonElement que herda de HTMLParentElement 
// contando com o atributo adiconal:
// - onClick: function
// A única validação necessária ao atributo onClick é checar se o tipo do seu valor é uma função 
// (pode ser feito através da função typeof(). 
// Caso o valor de onClick não seja passado no construtor da classe, 
// seu valor default deve ser uma função que não retorna nada.

class HTMLButtonElement extends HTMLParentElement {
    constructor(){

    }
}

// Crie uma classe chamada HTMLTableElement que herda de HTMLParentElement, 
// modificando o atributo appendChild(child: HTMLBaseElement) da super classe de modo que
// só seja possível adicionar elementos ao atributo children se o atributo tagName desse novo 
// elemento for um entre: 'thead', 'tbody', 'tfoot', 'tr' ou 'th'.

class HTMLTableElement extends HTMLParentElement {
    constructor(){

    }
}



//___________________Exercícios Fila_______________________
// Faça um programa para gerenciar uma to-do list, 
// crie uma classe para representar a lista de tarefas que faça uso da estrutura de fila 
// para incluir tarefas e remover tarefas considerando que as primeiras tarefas adicionadas, 
// são as primeiras a serem executadas e tão logo, as primeiras removidas da lista. 
// O programa deve funcionar da seguinte forma:

class TodoList {
    constructor() {
        let list = [];
        // this.add = function (valor) { list.push(valor)}
        this.add = value => list = [...list, value];

        this.remove = () => {
            const [head, ...tail] = list;
            list = tail;
            return head;
        }
        this.isEmpty = () => list.length === 0;
    }
}


todoList.add('Lavar o carro');
todoList.add('Levar o cachorro para passear');
todoList.remove() 
// Out: 'Lavar o carro'
todoList.add('Fazer o almoço');
todoList.add('Lavar a louça');
todoList.remove() 
// Out: 'Levar o cachorro para passear'
todoList.remove() 
// Out: 'Fazer o almoço'
todoList.remove() 
// Out: 'Lavar a louça'
todoList.remove() 
// Out: 'Não existem tarefas a fazer!!'



// Crie uma classe chamada Queue (Fila) que possui os métodos push() para inserir elementos e 
// pop() para retirar elementos. Além deste, crie um método chamado pushQueue() 
// que recebe um objeto da classe Queue como parâmetro e usando apenas os métodos push e pop, 
// transfira os elementos da fila recebida como parâmetro para a atual (this). 
// Crie também um método toString() para exibir os elementos da fila. Ex:




// Crie uma classe chamada Cozinha, com uma lista pedidos que deve ser incializada no construtor 
// da classe como um array vazio, comportando-se como uma fila. Crie um método confirmarPedido() 
// que recebe um pedido como parâmetro e adiciona à pedidos. Crie um método terminarPedido() 
// que retira um pedido do array pedidos. A lista de pedidos da cozinha não deve ultrapassar 
// 10 pedidos, caso haja tentativa de adicionar o 11º, use o throw para lançar um erro.

// Crie uma classe Atendente, com o método anotarPedido() que deve receber um pedido (string) 
// como parâmetro e armazena num array pedidosAConfirmar que deve ser atributo da classe e se 
// comportar como uma fila. Crie também um método chamado enviarPedido que recebe uma instância 
// da classe Cozinha, e deve chamar o método confirmarPedido da cozinha passando o primeiro 
// pedido de pedidosAConfirmar como parâmetro. Caso a lista de pedidos ainda não tenha atingido o
//  limite, o método deve também remover o pedido do array pedidosAConfirmar, caso contrário,
//   o item fica no array.




//Crie uma classe chamada Estacionamento que deve possui três atributos:

// primeiroAndar: string[]
// segundoAndar: string[]
// terceiroAndar: string[]
// Cada um desses atributos deve se comportar como uma fila. 
// Crie um método chamado estacionar() que deve receber uma string representando a 
// placa de um carro (sem necessidade de validação) e armazenar o carro em um dos três andares. 
// Cada andar tem o limite de 15 carros, se o primeiroAndar estiver cheio, 
// deve armazenar no segundoAndar, e se este estiver cheio, o terceiroAndar começa a armazenar 
// esses carros, o método deve imprimir no console em que andar cada carro foi adicionado. 
// Se todos os três andares estiverem lotados, exiba uma mensagem de erro.

// Crie também um método liberarVaga() que desaloca um carro do estacionamento.