const botaoEx1 = document.getElementById("Ex1");
botaoEx1.addEventListener("click",Ex1);

const botaoEx2 = document.getElementById("Ex2");
botaoEx2.addEventListener("click",Ex2);

const botaoEx3 = document.getElementById("Ex3");
botaoEx3.addEventListener("click",Ex3);

const botaoEx4 = document.getElementById("Ex4");
botaoEx4.addEventListener("click",Ex4);

const botaoEx5 = document.getElementById("Ex5");
botaoEx5.addEventListener("click",Ex5);

const botaoEx6 = document.getElementById("Ex6");
botaoEx6.addEventListener("click",Ex6);

const botaoEx7 = document.getElementById("Ex7");
botaoEx7.addEventListener("click",Ex7);

function Ex1(){ 
    let numero = parseFloat(prompt("Digite um número para começar o cronômetro (de 1 a 59):"));
  
    if(isNaN(numero) || numero < 1 || numero > 59){
      alert("Número inválido! Digite um número válido de 1 a 59.");
    } else {      
      let intervalo = setInterval(() => {
        alert(numero + " segundos");
        numero++;
            
        if (numero > 59) {
          clearInterval(intervalo);
          alert("Fim da contagem");
        }
      }, 1000); // 1000 ms = 1 segundo
    }
}

function Ex2(){
    let numero0 = parseFloat(prompt("Digite um número para ver a tabuada dele:"));
    for (let contador = 1; contador <= 10; contador++) {
        let resultado = numero * contador;
        alert(numero + " x " + contador + " = " + resultado);
    }
}

function Ex3(){
    let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let numero2 = parseInt(prompt("Digite o segundo número inteiro: "));

    if (numero1 % 2 === 0) {
        numero1++;
    }
    
    if (numero2 % 2 === 0) {
        numero2++;
    }
    
    if (numero1 < numero2) {
        for (let i = numero1 + 2; i < numero2; i += 2) {
            alert(i + " ");
        }
    } else if (numero1 > numero2) {
        for (let i = numero2 + 2; i < numero1; i += 2) {
            alert(i + " ");
        }
    } else {
        alert("Você colocou números iguais");
    }
}

function Ex4(){
    let numero3 = parseInt(prompt("Digite um número"));
    let numero4 = parseInt(prompt("Digite um número"));

    let numero1;
    let numero2;

    numero1 = parseInt(prompt("Digite um número: "));
    console.clear();

    do {
        numero2 = parseInt(prompt("Digite um número: "));

        if (numero2 !== numero1) {
            if (Math.abs(numero1 - numero2) <= 10) {
                console.log("Tá quente!");
            } else {
                console.log("Tá frio!");
            }
        }
    } while (numero2 !== numero1);
}
