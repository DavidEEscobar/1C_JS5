let VectorA;
let tamanioA;
VectorA = new Array(parseInt(prompt('ingrese cantidad de numeros', '')));
tamanioA = VectorA.length;

for(let i = 0; i < tamanioA; i++){
    VectorA[i] = ValorAleatorio(0,32000);
}
document.write('Vector A: ' + '<br>');
VectorA.forEach(function(value,index) {
    document.write(value + ' ' + index + '<br>');
});
document.write('<br>' + 'Vector B: ' + '<br>');
CrearVectorB(VectorA, tamanioA).forEach(function(value, index){
    document.write(value + ' ' + index + '<br>');
});
document.write('<br>Vector C:<br>');
CrearVectorC(VectorA, tamanioA).forEach(function(value, index){
    document.write(value + ' ' + index + '<br>');
});
document.write('<br>' + 'El promedio es: ' + PromedioA(VectorA));
document.write('<br>cantidad de elementos multiplos de 2 y 3 a la vez es: ' + Multiplos(VectorA) + '<br>');
document.write('La suma de todos los elementos es: ' + SumaVec(VectorA));



function CrearVectorC(vec, len){
    let VectorC = new Array();
    for(let i = 0; i < len; i++){
        VectorC[i] = VectorA[i] * 2;
    }
    return VectorC;
}

function CrearVectorB(vec, len){
    let VectorB = new Array();
    for(let i = 0; i < len; i++){
        if(vec[i] > PromedioA(vec)){
            VectorB.push(vec[i]);
        }
    }
    return VectorB;
}

function PromedioA(valor){
    let suma;
    let Promedio;
    suma = valor.reduce((a,c) => a + c, 0,);
    Promedio = suma / valor.length;
    return Promedio;
}

function Multiplos(vec){
    let multi = 0;
    vec.forEach(function(valor, index){
        if((vec[index] % 2) == 0 && (vec[index] % 3) == 0){
            multi++;
        }
    });
    return multi;
}

function SumaVec(vec){
    let suma = 0;
    suma = vec.reduce((a,c) => a + c, 0,);
    return suma;
}

function ValorAleatorio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}