class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  Atacar() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "usando magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usando espada";
    } else if (this.tipo === "monge") {
      ataque = "usando artes marciais";
    } else {
      ataque = "usando shuriken";
    }
    console.log(`O ${this.tipo} atacou ${ataque}`);
  }
}

let hero = new Hero("Shaolin", 88, "monge");
hero.Atacar();