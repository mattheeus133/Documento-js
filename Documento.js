{
    var  x = 1;
    var  i = 2;
    var  a = 7.0562364621;
    const nome = "Matheus";

   
    console.log(typeof nome); // typeof mostra qual o tipo da variavel
    console.log(typeof "peido");
    console.log(Number.isInteger(x)); /*isInteger serve para ver se o numero é do tipo inteiro ou nao, se o
    numero checado for um numero com casa decimal 0 por exemplo 1.0 o javascript determina esse numero como um
    numero inteiro */
    console.log(a);
    console.log(a.toFixed(2)); //toFixed serve para definer quantas casas decimais voce quer mostrar
    console.log(a.toString); // converte sua variavel em String.
    console.log(a.toString(2)); /* transformando o valor da sua variavel em binario 
    OBS: tem que ser utilizido o numero dois entre parentes depois do toString contrario a isso o codigo 
    indentificara um erro */
    console.log(typeof Number); /* Number com N maiusculo é uma função e number com n minusculo é um 
    tipo de dado */
    console.log(8 / 0);//numeros dividido por zero o javascript vai definir com resultado infinito.
    console.log(nome.charAt(4)); // charAt() retorna o caracter na posição que voce pediu.
    console.log(nome.charCodeAt(4));// puxa o numero associado ao caracter na tabala unicode ou tabela ASCII
    console.log(nome.indexOf()); //??
    console.log(nome.substring(4 ,6));/*O método substring() retorna a parte da string entre os índices 
    inicial e final, ou até o final da string.*/
    console.log(nome.replace('e', '3'));// replace ira trocar o caracter que voce quiser por outro 
    

    const m = 23; // const valor que não pode ser alterado
    

    console.log(m);

}
