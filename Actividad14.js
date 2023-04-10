let miNumero="17";
let edad=Number(miNumero);
console.log(edad);
if(isNaN(edad)){
    console,log("No es mi numero");
}
else{
    if(edad>=19){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}
if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    let resultad0=(edad>=18)? "Puede votar":"Muy joven para votar";
    console.log(resultad0)
}