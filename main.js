


function localizador() {
    let boda = prompt("Bienvenido a su tienda de regalos de bodas, introduzca el número de boda")

    alert("Bienvenido " + nombre + ", a la boda número " + boda + " correspondiente a Juan Martínez y María Tagliafico, a continuación se presentan los regalos disponibles");

}

function comprar() {
         
           
        regalo = prompt("Escoger el número del regalo \n 1) Toallas para la casa ($50 USD) \n 2) Juego de utencilios de cocina ($100 USD) \n 3) Lavadora ($300 USD) \n 4) Secadora ($250 USD) \n 5) Juego de platos y vasos ($150 USD) \n 6)Sábanas y almohadas ($200 USD) ")
        
            switch(regalo) {
                case "1" :
                    precio = 50;
                    alert("Las toallas para la casa se han agregado a su carrito");
                    break;
                case "2" :
                    precio =100;
                    alert("Los utencilios de cocina se han agregado a su carrito");
                    break; 
                case "3" :
                    precio = 300;
                    alert("La lavadora se ha agregado a su carrito");
                    break;   
                case "4" :
                    precio = 250;
                    alert("La secadora se ha agregado a su carrito");
                    break; 
                case "5" :
                    precio= 150;
                    alert("El juego de platos y vasos se ha agregado a su carrito"); 
                    break;                        

                }
        decision = prompt("¿Quieres cambiar de articulo? \n 1) Si \n 2) No" );
             
}

function msj() {
    mensaje = prompt(" Deje un mensaje para los novios");
}

function resumen() {
  alert("Listo " + nombre + ", has elegido satisfactoriamente la opción " + regalo + " como regalo para Juan y María, con el siguiente mensaje: \n " + mensaje);  
}

let precio; 
let mensaje;
let regalo;
let nombre = prompt("Introduzca su nombre");
let decision;


localizador();
 while(decision !== "No"){
    comprar();
 };
 msj();
 resumen();




//console.log(precio);
//console.log(decision);
//console.log(preciofinal);
