//1)Calcular a tabuada de multiplicar de 5.
//a)Adicionar o resultado de cada cálculo em um array.
//b)Transformar o array em string.
//c)Exibir no console.

function tabuadaCinco(){
    let resultadoArray = []
        for(i = 1; i < 11; i++){
        let tabuCinco = 5 * i;
        resultadoArray.push(tabuCinco);
        }
    
    let transformarString = resultadoArray.toString();
    console.log(transformarString);
}
tabuadaCinco();

//2)Utilizar a fórmula abaixo para que converter uma temperatura de Fahrenheit para Celsius:
//a)n é o valor da temperatura a ser convertida.
//b)Dado o array  de temperaturas com os valores  54, 78, 56, 98, 0, 12, 11, 37
//c)Exibir no console cada uma das temperaturas convertidas de Fahrenheit para Celsius.

function converter(n){
    let resultado = ((n - 32)/1.8);
    console.log(resultado.toFixed(2))
}
celsius(54)