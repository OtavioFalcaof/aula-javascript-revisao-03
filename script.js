
//1) Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.
//a) Se a fruta for maçã, retorne no console: “Não vendemos esta fruta aqui”.
//b) Se for kiwi, retorne: “Estamos com escassez de kiwis”.
//c) Se for melancia, retorne: “Aqui está, são 3 reais o quilo”.
//d) Se não for nenhum dos valores, deverá retornar uma mensagem de erro no console: Procure o administrador do sistema!

let fruta = "maçã";

if (fruta == "maçã") {
    console.log("Não vendemos essa fruta aqui.");
}else if(fruta == "kiwi"){
    console.log("Estamos com escassez de kiwis.");
}else if(fruta == "melancia"){
    console.log("Aqui está, são 3 reais o quilo.");
}else{
    console.log("Procure o administrados do sistema!");
}

//2) As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores. Criar variáveis que tenham o salário do colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//a) Salários até R$ 280,00 (incluindo) : aumento de 20%
//b) Salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//c) Salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//d) Salários de R$ 1500,00 em diante : aumento de 5%

//Após o aumento ser realizado, informe no console:

// O salário antes do reajuste;
// O percentual de aumento aplicado;
// O valor do aumento;
// O novo salário, após o aumento.

let salarioAtual = parseFloat() //INSERIR UM VALOR
let reajuste;
let salarioComReajuste;
if(salarioAtual <= 280 ){
    reajuste = salarioAtual * 0.2
    salarioComReajuste = salarioAtual+reajuste;
    console.log("O salário é : R$",salarioAtual)
    console.log("O salário teve um reajuste de 20%: R$",reajuste)
    console.log("O salário atual será de : R$",salarioComReajuste)
}else if(salarioAtual >= 280 && salarioAtual <= 700){
    reajuste = salarioAtual* 0.15;
    salarioComReajuste = salarioAtual+reajuste;
    console.log("O salário é : R$",salarioAtual)
    console.log("O salário teve um reajuste de 15%: R$",reajuste)
    console.log("O salário atual será de : R$",salarioComReajuste)
}else if(salarioAtual >= 700 && salarioAtual <= 1500){
    reajuste = salarioAtual* 0.10;
    salarioComReajuste = salarioAtual+reajuste;
    console.log("O salário é : R$",salarioAtual)
    console.log("O salário teve um reajuste de 10%: R$",reajuste)
    console.log("O salário atual será de : R$",salarioComReajuste)
}else{
    reajuste = salarioAtual* 0.05;
    salarioComReajuste = salarioAtual+reajuste;
    console.log("O salário é : R$",salarioAtual)
    console.log("O salário teve um reajuste de 5%: R$",reajuste)
    console.log("O salário atual será de : R$",salarioComReajuste)
}