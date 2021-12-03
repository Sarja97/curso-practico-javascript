//Cuadrados

function perimetroCuadrado(lado){
    return lado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");
}

function areaCuadrado(lado){
    return lado * lado;
}


//Triabgulos

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
 
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}


//Circulos

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro * Math.PI;
}


function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}


// Funciones onclick

//Cuadrado

function calcularPrimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value; 
  const perimetro = perimetroCuadrado(value);
  alert (perimetro + "cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    const area = areaCuadrado(value);
    alert (area + "cm cuadrados");
}

//Triangulo

function calcularPrimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);
    const perimetro2 = perimetroTriangulo(value1, value2, value3);
    alert(perimetro2 + "cm")
}
function calcularAreaTriangulo(){
    const input4 = document.getElementById("InputTriangulo4");
    const value4 = Number(input4.value);
    const input5 = document.getElementById("InputTriangulo5");
    const value5 = Number(input5.value);
    const area2 = areaTriangulo(value4, value5);
    alert("El area de tu triangulo es de " + area2 + "cm cuadrados");
}

//Circulo

function calcularPrimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("el perimetro de tu circulo es de " + perimetro + "cm");
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area de tu circulo es de " + area + "cm cuadrados");

}