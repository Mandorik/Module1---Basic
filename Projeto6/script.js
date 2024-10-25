/**
 * Switch é uma expressão de casos que usamos pra realizar cada condição com base na condição que foi previamente
 * estipulada
 * 
 * 
 * POR EXEMPLO:
 * Suponhamos que queremos criar um menu para que o usuário digite um número referente a algum item de uma lista
 * para que ele possa comprá-lo
 */

function pedir(){
    //criamos uma variável para armazenar o que foi pedido pelo usuário
    var valor = prompt("Digite seu pedido:" );

    //Dentro do parênteses colocamos o caso. Neste caso é a variável que armazenamos do pedido do usuário
    //Só que do prompt sempre vêm strings, é necessária transformá-la em uma integral
    /**
     * Para confirmar isso, podemos ver no log do console usando typeof para confirmar seu tipo
     * console.log(typeof valor)
     * Isso retorna que é uma string
     * 
     * É possível transformá-la num número através de Number(). A variável a ser convertida vai dentro dos ()
     * console.log(typeof Number(valor));
     */

    /**
     * Criamos um switch, passamos nossa condição - o caso de uso que queremos - a variável "valor" e a convertemos num 
     * número, para que assim possa ser vinculado ao caso de uso estipulado em cada caso - no exemplo de 1 até 4 - e caso
     * o que o usuário escolher não satisfaça nenhum dos casos pré-estipulados, há um caso default que será invocado
     */

    switch(Number(valor)){
    //Case estipulamos nossos casos, assim, caso o valor da variável valor seja equivalente a quaisquer
    //um dos casos, ele rodará o que está no case
        case 1:
            alert("Você escolheu 1 = Suco");
            break; //para parar a execução
        case 2:
            alert("Você escolheu 2 = Água Gelada");
            break;
        case 3:
            alert("Você escolheu 3 = Sorvete");
            break;
        case 4:
            alert("Você escolheu 4 = Chamar o Garçom");
            break;
        default: //é um caso de uso padrão, isto é, quando nenhum dos outros casos é o selecionado
            alert("Escolha uma opção entre 1 e 4");
            break;
    }
    
    /**
     * Precisa ser sempre números no case? Não, é possível com um texto
     */

    //switch(valor){
    //    //Case estipulamos nossos casos, assim, caso o valor da variável valor seja equivalente a quaisquer
    //    //um dos casos, ele rodará o que está no case
    //    case '1':
    //        alert("Você escolheu 1 = Suco - só que como string!");
    //        break; //para parar a execução
    //    case '2':
    //        alert("Você escolheu 2 = Água Gelada - só que como string!");
    //        break;
    //    case '3':
    //        alert("Você escolheu 3 = Sorvete - só que como string!");
    //        break;
    //    case '4':
    //        alert("Você escolheu 4 = Chamar o Garçom - só que como string!");
    //        break;
    //    default: //é um caso de uso padrão, isto é, quando nenhum dos outros casos é o selecionado
    //        alert("Escolha uma opção entre 1 e 4");
    //        break;
    //}

}