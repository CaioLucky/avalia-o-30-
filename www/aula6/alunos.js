class Alunos{
    idade;
    curso;
    nome;

    exibirInfo (idade,curso, nome){
        this.idade = idade
        this.curso= curso
        this.nome= nome

        console.log("curso:"+ this.curso)
        console.log("idade:"+ this.idade)
        console.log("Aluno:"+ this.nome)
    }
}
    var aluno1= new Alunos()
    var aluno2= new Alunos()
    var aluno3= new Alunos()

    aluno1.exibirInfo("Vitor Hugo", 26, "Sistemas de informação")
    aluno2.exibirInfo("Gustavo", 22, "Engenharia Civil")
    aluno3.exibirInfo("Maria", 21, "Psicologia")
   