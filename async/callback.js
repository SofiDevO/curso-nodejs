function SoyAsincrona(miCallback){
    console.log("Hola soy una funcion asincrona");
    setTimeout(function(){
        console.log("Estoy siendo asyncrona")
        miCallback();
    },1000);
}


console.log("Iniciando proceso....");

SoyAsincrona(function(){
    console.log("Terminando  proceso...");
});


