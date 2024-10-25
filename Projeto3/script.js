/**
 * var area = document.getElementById("header")
 * nota1 = prompt("Digite a nota do aluno:")
 * nota2 = prompt("Digite a nota do aluno:")
 * 
 * 
 * //O prompt retorna uma string, então, no caso, a media trataria, por exemplo, se nota1 e nota2 fossem '1', 
 * //media trataria como '1'+'1'/2 o que ficaria 11/2 e retornaria 5.5
 * //Para que o media 
 * nota1 = parseFloat(nota1)
 * nota2 = parseFloat(nota2)
 */












//media = (nota1 + nota2)/2;

//if(media >= 7){
//    area.innerHTML = "Aluno aprovado, sua nota foi de " + media;
//} else if(media < 7){
//    area.innerHTML = "Aluno reprovado, sua nota foi de " + media;
//}


//########################################################################################################################

/**
 * Funções também podem receber parâmetros se quisermos
 * A função mediaAluno tem como parâmetros (nota1, nota2). Esses dois parâmetros não foram declaradas, mas dentro do
 * console é possível chamar a função e ela pedirá os dois parâmetros. Os parâmetros poderão ser normalmente 
 * utilizados, sendo usados para cálculo da media por exemplo
 */


function mediaAluno(nota1, nota2){
    const media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("Aluno aprovado, sua nota foi de " + media)
    } else if(media < 7){
        console.log("Aluno reprovado, sua nota foi de " + media)
    }

}

//EXEMPLO 2

/**
 * Suponhamos que precisamos mostrar uma mensagem de bem-vindo ao aluno, mas é necessário dizer seu nome e curso
 * O propósito é mostrar que strings também funcionam
 * LEMBRE-SE SEMPRE, Função é para resolvermos um determinado problema, pense como uma estrutura ou bloco em que pode-se
 * escrever um algoritmo, um procedimento para resolver um determinado problema, fazer alguma ação ou devolver alguma 
 * coisa
 */

function alunoCurso(nome, curso){
    const mensagem = "Seja bem-vindo, " + nome + " ao curso de " + curso;
    console.log(mensagem);

}