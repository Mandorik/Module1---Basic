/** Já vimos variáveis de texto, números... mas podemos ter listas, listas de números, listas de textos, ambos etc
 * Arrays são listagens dentro do JavaScript
 * PARA QUE SERVEM?
 * É uma variável, ela vai armazenar uma listagem
 */
//const lista = []; Assim é criada uma array vazia. Dentro das [] são postos os itens dentro dela

//const lista = ["Matheus", "Lucas", "José", 150];

/**console.log(lista)
 * isso mostrará no console que há um Array(4), isso quer dizer que, existem 4 elementos dentro do Array, os quatro
 * que foram declarados. Ao expandir se mostra:
 * 0: "Matheus"
 * 1: "Lucas"
 * 2: "José"
 * 3: 150
 * length: 4
 * 
 * Vê-se que sempre o primeiro elemento de uma lista é 0, e que o length (comprimento da lista) é 4
 */

//Para acessar um item específico da lista, é possível declarar a posição dentro dos []:
//lista[0]
//Isso vai acessar o que está na primeira posição da lista, no caso "Matheus"


//Para acessar o tamanho (length) do array, é só usar
//lista.length;
//Isso retorna o tamanho dela


//Agora, vamos manipular arrays:

const lista = ['Lucas', 'José', 'Maria', 150];

//Como identificamos se tem um item na lista?
//Através do método .indexOf, passa-se o que você busca na lista, no caso, ('Maria')
lista.indexOf('Maria');
//Nesse caso ele devolveria 2, já que a Maria está na posição [2] 

//Quando não encontrar, ele retornará -1
//lista.indexOf('João')
//Como não tem 'João' nessa lista, retornaria -1


//É possível alterar um item dentro de uma lista?
//Sim, ao demarcar qual posição da lista [n] e dizer o que ele receberá:
//lista[1] = "José Silva";

//Para adicionar mais itens à lista:
lista.push('Matheus')

//Agora a lista terá 5 elementos
//O .push vai sempre adicionar o elemento ao final da lista, sempre na última posição
/**console.log(lista)
 * isso mostrará no console que há um Array(5), isso quer dizer que, existem 4 elementos dentro do Array, os quatro
 * que foram declarados. Ao expandir se mostra:
 * 0: "Lucas"
 * 1: "José Silva"
 * 2: "Maria"
 * 3: 150
 * 4: "Matheus"
 * length: 5
 */

//E para remover o primeiro item da lista?
lista.shift();

//O .shift sempre remove o primeiro elemento da lista [0], e moverá os itens para a posição anterior
/**console.log(lista)
 * isso mostrará no console que há um Array(4), isso quer dizer que, existem 4 elementos dentro do Array, os quatro
 * que foram declarados. Ao expandir se mostra:
 * 0: "José Silva"
 * 1: "Maria"
 * 2: 150
 * 3: "Matheus"
 * length: 4
 */

//E para remover o último item da lista?
lista.pop();
//O .pop sempre remove o último elemento da lista
/**console.log(lista)
 * isso mostrará no console que há um Array(3), isso quer dizer que, existem 4 elementos dentro do Array, os quatro
 * que foram declarados. Ao expandir se mostra:
 * 0: "José Silva"
 * 1: "Maria"
 * 2: 150
 * length: 3
 */

//Existe também o Join, que separa todos os itens de uma lista
//lista.join(';')
//Agora todos os itens da lista serão transformados em uma string com um ; entre os itens
//'José Silva;Maria;150'
//Ele não mexe na lista, apenas a retorna nessa string

/**Manipulando métodos Arrays
 * - Convertendo Arrays para String: toString() e join()
 * 
 * O método toString() converte um array em uma string de valores (separados por vígula.)
 * var times = ["Palmeiras","Santos","Flamengo","Vasco"]
 * var lista = times.toString();
 * lista
 * "Palmeiras,Santos,Flamengo,Vasco"
 * 
 * O método join() permite especificar um separador:
 * var times = ["Palmeiras", "Santos", "Flamengo", "Vasco"];
 * var lista = times.join("/")
 * 
 * lista
 * "Palmeiras/Santos/Flamengo/Vasco"
 */
/* 
 * - Adicionando elementos a um array: push() e unshift()
 * O método push() adiciona um novo elemento ao final de um array:
 * var times = ["Bahia","Fluminense","Cruzeiro"];
 * var lista = times.push("Santos");
 * times
 * (4) ["Bahia", "Fluminense", "Cruzeiro","Santos"];
 * 
 * Podemos continuar incluindo elementos no array. Vamos agora incluir mais dois elementos:
 * times
 * (4)["Bahia", "Fluminense", "Cruzeiro", "Santos"]
 * var lista = times.push("Coritiba","Flamengo")
 * times
 * (6)["Bahia", "Fluminense", "Cruzeiro", "Santos", "Coritiba","Flamengo"]
 * 
 * - Podemos usar o método unshift() incluir um novo elemento no início do array:
 * let frutas = ["banana", "laranja, "melancia", "manga"];
 * frutas
 * (4) ["banana", "laranja, "melancia", "manga"];
 * frutas.unshift("abacate");
 * 5
 * frutas
 * (5) ["abacate", "banana", "laranja, "melancia", "manga"]
 * 
 * - Removendo elementos de um array: pop() e shift()
 * var times = ["Bahia", "Fluminense", "Cruzeiro", "Santos", "Coritiba", "Flamengo"];
 * times.pop();
 * "Flamengo"
 * times
 * (5) ["Bahia", "Fluminense", "Cruzeiro", "Santos", "Coritiba"];
 * 
 * No exemplo removemos o elemento Flamengo do array original usando o método times.pop();
 * 
 * Podemos usar o método shift() para remover o primeiro elemento e deslocar os demais elementos para 
 * um índice menor:
 * 
 * times
 * (5) ["Bahia", "Fluminense", "Cruzeiro", "Santos", "Coritiba"]
 * times.shift();
 * "Bahia"
 * times
 * (4) ["Fluminense", "Cruzeiro", "Santos", "Coritiba"]
 * 
 * - Concatenando arrays
 * 
 * O método concat() cria um novo array mesclando arrays existentes:
 * var meninos = ["Joao", "Matheus", "Henrique"];
 * var meninas = ["Silvia", "Maria"];
 * 
 * var criancas = meninos.concat(meninas);
 * 
 * criancas
 * (5) ["Joao", "Matheus", "Henrique", "Silvia", "Maria"]
 */
