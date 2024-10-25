/**
 * While = Enquanto
 * Ele fará o loop ENQUANTO a condição for verdadeira
 * 
 * Exemplo:
 * 
 * var x = 0;
 * 
 * //Dentro do parênteses você passa a condição, neste caso, enquanto x for menor que 10 ele fará o
 * //que está dentro das chaves {}
 * while(x < 10){
 *  document.write("O valor do x é:" + x + "<br>");
 * //é preciso incrementar, mudar, o valor da variável, senão ficará num loop infinito!
 * //Isso quer dizer que a variável - nesse caso x - será aumentada em um toda vez que passar no while
 *  x++;
 * //isso é igual a escrever x = x + 1;
 * }
 * 
 */

/**
 * For = Para
 * Também é um loop bem utilizado que o fará enquanto satisfazer as condições impostas
 * 
 * //Dentro do parênteses você passa a condição, só que nesse caso o for você pode aplicar mais informações
 * //por exemplo as três condições que formam o WHILE, a variável contadora, a condição de loop e a sua
 * //incrementação
 * for(a = 0; a <= 10; a++){
 *  document.write("Valor da variável a é: " + a + "<br>");
 * }
 * 
 * 
 * Lembrete: A condição de loop pode ser comandada por outra variável!
 * 
 * var valor = 30;
 * for(a = 0; a <= valor; a++){
 *  document.write("O valor da variável a é: " + a + "br")
 * }
 */

//Nesse caso colocamos uma condição baseada numa outra variável - valor -.
var valor = 30;
for(a = 0; a <= valor; a++){
    document.write("O valor da variável a é: " + a + "<br>")
    console.log(a + 10);
}
