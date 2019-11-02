var Aluno = function (matricula, nome, d1, d2, d3, a1, a2) {
    this.matricula = matricula;
    this.nome = nome;
    this.d1 = d1;
    this.d2 = d2;
    this.d3 = d3;
    this.a1 = a1;
    this.a2 = a2;
}
    
Aluno.prototype.getNome = function() {
    return this.nome;
}
    
Aluno.prototype.getNotas = function() {
    return " Nota Prova 1: " + this.d1 + "\nNota Prova 2: " + this.d2 + "\nNota Prova 3: " 
    + this.d3 + "\nNota Trabalho 1: " + this.a1 + "\nNota Trabalho 2: " + this.a2;
}

Aluno.prototype.getNotaFinal = function() {
    let notafinal = this.d1 + this.d2 + this.d3 + this.a1 + this.a2;
    return "Nota Final: " + notafinal;
}

function maiorNota(){
    if (this.d1 > this.d2 && this.d1 > this.d3){
        return this.d1;
    }

    else if(this.d2 > this.d1 && this.d2 > this.d3){
        return this.d2;
    }

    else if(this.d3 > this.d1 && this.d3 > this.d2){
        return this.d3;
    }
    
}

function menorNota(){
    if (this.d1 < this.d2 && this.d1 < this.d3){
        return this.d1;
    }

    else if(this.d2 < this.d1 && this.d2 < this.d3){
        return this.d2;
    }

    else if(this.d3 < this.d1 && this.d3 < this.d2){
        return this.d3;
    }
}


function media(){
    var total = (this.d1 + this.d2 + this.d3 + this.a1 + this.a2) / 5;
    return "A média das notas é: " + total;
}

function calculaNotaFinal(){
    
}