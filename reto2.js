let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿cuantos años tienes");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && !free){
            alert("entras gratis crack, porque son las 2am");
            free = true
        } else {
            alert(`Son las ${time}am Entras, pero toco pagar`)
        }
    } else {
        alert("aun no eres mayor de edad");
    }
}

validarCliente(12);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(4);
validarCliente(5);
validarCliente(10);

