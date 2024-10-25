var nome = prompt("Qual seu nome?");
//prompt é utilizado para pedir que o usuário digite algo

var sobrenome = prompt("Qual seu sobrenome?")

//console.log(nome);
//gera um log no console para averiguar se está armazenando o prompt do usuário corretamente como a variável nome

//console.log("Olá, " + nome)
//agora concatena uma string pré-definida com a variável nome

console.log("Olá, " + nome + ' ' + sobrenome)
/*agora concatena uma string pré-definida com outras duas variáveis, também aplica-se uma string vazia para fins de
não aglutinar as strings. Um pouco improdutivo deste modo, mas ainda não usei o método `${}`*/


//vamos acessar nossa árvore de elementos, nosso document. O Document é a página assim dizendo
//document.write("<h1>Bem-vindo ao projeto</h1>")
/*o write é para de fato escrever. Lembrando que é necessário colocar a tag
Neste caso apresentará o que está escrito dentro das tags de h1 com formatação de h1
LEMBRANDO QUE: essa frase só aparecerá depois de devidamente respondido os dois prompts, uma vez que o documento 
é lido de cima para baixo*/

//Ok, agora que tal escrevermos a mensagem de bem-vindo junto do nome que o usuário colocou?
document.write("<h1>Bem-vindo, " + nome + "</h1>")
//Novamente, concatena-se a frase pré-definida, lembrando que A FRASE precisa estar dentro de aspas, mas a var não

//Vamos finalizar adicionando uma imagem. Também usa-se write, mas desta vez com a tag img, de imagem
document.write("<img src='https://sujeitoprogramador.com/steve.png' alt='Foto do Steve Jobs'>")
//Para declarar a source (src), visto que já é usado aspas duplas para a string, deve-se usar aspas simples
//Dentro da source (scr) declarar a origem da imagem
///alt é para texto alternativo, também em aspas simples.