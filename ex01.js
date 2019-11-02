var Jogador = function (nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
}
    
Jogador.prototype.toString = function() {
    return this.nome + ", " + this.idade + " , " + this.altura + " , " + this.peso;
}
    
function imc(){
    var imc = peso / (altura * altura);
    return imc;
}