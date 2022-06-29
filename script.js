let salario = window.prompt("Qual o seu salário?");
let tempo = window.prompt("Quanto tempo de empresa você tem?");
let bonus = 0;

salario = parseInt(salario);
tempo = parseInt(tempo);

if(tempo >= 5){
    bonus = salario*0.20;
    bonus = parseInt(bonus)
}
else{
    bonus = salario*0.10; 
    bonus = parseInt(bonus)
}

window.alert(bonus)