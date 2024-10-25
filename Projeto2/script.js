/*
 * EXPLICAÇÃO:
 * document quer dizer que está acessando nosso documento (a nossa página)
 * .getElementById = queremos pegar um elemento por seu id, no caso o id do h2 onde está escrito "Bem-vindo"
 * ('h2Welcome') o parâmetro do getElementById é o id daquele h2
 * Tudo isso está sendo armazenado na variável "bemVindo" para ser posteriormente utilizada
 */

var bemVindo = document.getElementById('header-bem-vindo')

//A função que estará sendo invocada no onclick do botão "botaoAcessar1" está sendo declarada aqui
function acessar(){ //Lembrando que dentro das {} está todo o procedimento da função, o que ela faz

    //alert("Clickou!"); no caso era apenas um teste para ver se o onclick de fato invocava a função

    var nome = prompt("Digite o seu nome:" )//Variável 'nome' está armazenando o prompt do usuário

    /*
     * Vamos validar o que o usuário andou escrevendo? Caso ele cancele, enviará o bemVindo como null,
     * se der ok sem escrever nada, enviará uma string vazia, assim derrotando o propósito. Vamos adicionar 
     * condições para que a mensagem seja exibida e para que o usuário tenha outra chance de preencher
     */

    /*
     *se a variável 'nome' (o prompt do usuário) seja justamente uma string vazia (isto é, deu o ok mas 
     *nada foi preenchido) ou null (nenhum dado foi passado)
     *'||' significa OU, ou seja, se qualquer uma das afirmações for verdadeira o que está dentro das {} ocorrerá
     */

    if(nome === '' || nome === null){
        alert("Ops, algo deu errado")
        bemVindo.innerHTML = "Clique no botão para acessar..."
    }else{
        //A sua explicação está ao final do arquivo, visto que originalmente não estava sendo validada
        bemVindo.innerHTML = "Bem-vindo, " + nome;

        /*
         *agora, vamos adicionar um outro botão para sair, só que ele só aparecerá após o usuário adicionar seu nome
         * com sucesso... Portanto, a lógica ficará dentro do else, se não apareceria ao apertar o botão, 
         * independentemente do prompt ter satisfeito a condição de entrada ou não.
         */

        /**
         * Para criar outro botão (um elemento) é necessário:
         * EXPLICAÇÃO:
         * declara-se uma variável local (let) que recebe 
         * document quer dizer que acessamos nosso documento (a nossa página)
         * .createElement basicamente cria um elemento
         * ("button") passado como parâmetro qual elemento queremos criar, no caso um botão
         * 
         */
         
        
        let botaoSair = document.createElement("button")
        botaoSair.innerText = "Sair" //O texto que estará escrito dentro da variável, no caso "botaoSair"
        botaoSair.onclick = sair; //Quando clicar no botão vai chamar a função sair

        /**Agora que criamos nosso botão, precisamos aplicá-lo dentro de algum local no nosso HTML
         * Queremos também colocá-lo dentro do h2, portanto
         * 
         * 'bemVindo' estamos acessando nosso h2, declarado no começo do script
         * .appendChild adiciona mais um elemento ali dentro
         * (botaoSair) passado como parâmetro qual elemento será, no caso o botão previamente criado
         */
        bemVindo.appendChild(botaoSair);

    }

    //agora, queremos mostrar isso dentro do HTML

    /*EXPLICAÇÃO:
     * Acessamos o nosso elemento "bemVindo" que é o h2 
     * innerHTML = dentro do nosso h2 a gente quer injetar um HTML
     * O que queremos injetar? a mensagem de "Bem-vindo" junto do que foi armazenado na variável 
     * 'nome' (o prompt do usuário)
     * bemVindo.innerHTML = "Bem-vindo, " + nome;
     */
    
}
/**
 * Agora, quando clicarmos no botão de sair, queremos que ele faça outra coisa, que limpe o que estava escrito e 
 * apenas mostre "clique no botão para acessar"
 * Para tal, criemos uma nova função fora do escopo da outra:
 */
function sair(){
    alert("Até mais!")
    bemVindo.innerHTML = 'Você saiu!' //Vamos escrever no h2 do documento que o usuário saiu
/**
 * Só que ainda falta essa função ser invocada, senão nada acontece. Para corrigir isso precisamos criar um onclick
 * no botão de Sair!
 * O bom do onclick é que você consegue cadastrar apenas uma função como callback do evento
 */
}
