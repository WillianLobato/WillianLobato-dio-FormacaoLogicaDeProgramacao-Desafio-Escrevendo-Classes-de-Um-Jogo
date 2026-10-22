/*
DESAFIO DIO.ME - Escrevendo as Classe de um Jogo
Objetivo: Criar heróis que atacam de acordo com sue tipo
*/

// CLASSE criada para representar o Herói
class Hero{

    //CONSTRUTOR recebe os dados de cada herói
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    
   // MÉTODO responsável pelo ataque do herói 
    attack(){
        let attackType = ""; // Declara a vaviável que armazenará o tipo de ataque

        switch (this.type.toLowerCase()) { //Verifica o tipo do herói para definir o Ataque
            case "mago":
                attackType = "Magia";
                break;
            
            case "guerreiro":
                attackType = "Espada";
                break;
            
            case "monge":
                attackType = "Artes Marciais";
                break;

            case "ninja":
                attackType = "Shuriken";
                break;
            
            default: // Caso o tipo não corresponda a nenhum dos anteriores 
                attackType = "Um ataque desconhecido";
        }   

        // Exibir a mensagem fina do ataque
        console.log(`O ${this.type} atacou usando ${attackType}`); 
   } 
}

// Criando os objetos, cada um representando um herói
const hero1 = new Hero("Arthas", 30,"Guerreiro");
const hero2 = new Hero("Merlin", 150,"Mago");
const hero3 = new Hero("Bruce", 35, "Mago");
const hero4 = new Hero("Hanzo", 28, "Ninja");

//Executa o metodo de ataque de cada heroi
hero1.attack();
hero2.attack();
hero3.attack();
hero4.attack();