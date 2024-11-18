// Defini uma classe de nome "Heroi" com um "constructor" que tem os parâmetros

class classeHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    // Aqui foi feito o método dentro da classe com o nome de "atacar" para imprimir uma mensagem padrão com os dados do herói
    atacar(){
        let ataque
        switch(this.tipo){
            case "guerreiro":
                ataque = "espada"
                break
            case "mago":
                ataque = "magia"
                break
             case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }

            console.log(`O ${this.tipo} de nome ${this.nome} e ${this.idade} anos atacou usando ${ataque}`)

    }
}

// Para criar um novo objeto dentro da classe utilizei o new seguido do nome da classeHeroi

const guerreiro = new classeHeroi("Gladiador" , 30 , "guerreiro")
guerreiro.atacar()

const mago = new classeHeroi("Merlin" , 85 , "mago")
mago.atacar()

const monge = new classeHeroi("Dalai Lama" , 100 , "monge")
monge.atacar()

const ninja = new classeHeroi("Donatello" , 20 , "ninja")
ninja.atacar()
