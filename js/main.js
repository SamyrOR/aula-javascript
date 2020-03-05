/*
var nome = "Samyr Ribeiro"
var idade = 24;
var idade2 = 5;
var frase = "Jamaica é topzera bixão";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2)
console.log(nome)
console.log(idade/idade2)
console.log(frase.toUpperCase())
frutas.replace("Jamaica","Holanda")
*/
//var frutas = ["maça","uva","banana"];
//frutas.push("pedra");
//frutas.pop();
//console.log(frutas[3]);
//alert(frutas[1]);
//console.log(frutas.length);
//console.log(frutas.reverse);
//console.log(frutas.toString())
//console.log(frutas.join(" | "))
/*
var frutas = {nome: "perera", cor: "preta", tamanho:"3 pés"}
console.log(frutas);
alert(frutas.cor);*/
//var frutas = [{nome: "perera", cor: "preta", tamanho:"3 pés"},{nome: "goiabra", cor: "veeerde", tamanho:"3 pés"}]
//console.log(frutas);
//alert(frutas[1].cor)
/*
var idade = prompt("Qual é a sua idade meu jovem?: ")
if (idade >= 18){
    alert("Você é maior de idade")
}else{
    alert("Menor de idade")
}
*/
/*
var contadora = 5;
while (contadora >=0){
    console.log(contadora);
    contadora--;
}
*/
/*for(count=0;count<=5;count++){
    alert(count)
}
*/
/*
var d = new Date;
alert(d.getDay())
alert(d.getMinutes())
*/
/*
function soma(n1,n2){
    return n1+n2;
}
alert(soma(4,10))
*/
/*
function subs(frase,nome,novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(subs("Aeeew Brasil","Brasil","Italia"))
*/
/*
function validaridade(idade){
    var validador
    if(idade>=18){
        
        validador = true
    }else{
        validador = false
    }
    return validador
}
var idade = prompt("Qual é a sua idade meu jovem ?: ")
console.log (validaridade(idade))
*/

function clicado(){
    //alert("Muito obrigador pelo click!");
    document.getElementById("posclick").innerHTML = "Aulas de JS!";
    console.log(document.getElementById("posclick"));


}

function redirecionar(){
    window.open("https://brorlandi.github.io/git-desfazendo-commits");
    //window.location.href = "https://brorlandi.github.io/git-desfazendo-commits";
}
function trocar(elemento){
    elemento.innerHTML = "Oloco bixo!";
   // document.getElementById("mousemove").innerHTML = "Oloco bixo";
}

function destrocar(elemento){
    elemento.innerHTML = "Olha isso";
    //document.getElementById("mousemove").innerHTML = "Olha isso";
}

function carregado(){
    alert("Página carregada!")
}

function change(elemento){
    console.log(elemento.value)
}