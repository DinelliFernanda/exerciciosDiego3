var Aluno = function (matricula, nome, d1, d2, d3, a1, a2, notas) {
    this.matricula = matricula;
    this.nome = nome;
    this.d1 = d1;
    this.d2 = d2;
    this.d3 = d3;
    this.a1 = a1;
    this.a2 = a2;
    this.notas = [d1, d2, d3, a1, a2];
}
    
Aluno.prototype.getNome = function() {
    return this.nome;
}
    
Aluno.prototype.getNotas = function() {
    return this.notas;
}

Aluno.prototype.getNotaFinal = function() {
    let notafinal = this.d1 + this.d2 + this.d3 + this.a1 + this.a2;
    return "Nota Final: " + notafinal;
}


Aluno.prototype.maiorNota = function (){
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

Aluno.prototype.menorNota = function (){
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


Aluno.prototype.media = function () {
    var total = (this.d1 + this.d2 + this.d3 + this.a1 + this.a2) / 5;
    return "A média das notas é: " + total;
}

Aluno.prototype.calculaNotaFinal = function () {
    this.notafinal = 0
    for (var i = 0; i < this.notas.length; i++) {
        this.notafinal += this.notas[i]
    }
}

let mf = new Aluno(0, 'Maria Fernanda', 10.2, 15, 9, 11.6, 13.5)
