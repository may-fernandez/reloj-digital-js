
// RELOJ DIGITAL

function actualizarReloj(){

    const ahora = new Date();
    let horas = ahora.getHours();
    const meridiano = horas >= 12 ? "PM" : "AM";
    horas = horas % 12 || 12;
    horas = horas.toString().padStart(2, 0);
    const minutos = ahora.getMinutes().toString().padStart(2, 0);
    const segundos = ahora.getSeconds().toString().padStart(2, 0);
    const tiempoString = `${horas}:${minutos}:${segundos} ${meridiano}`;
    
    document.getElementById("reloj").textContent = tiempoString;

}

actualizarReloj();
setInterval(actualizarReloj, 1000); // setInterval() settear intervalo para repetir la funcion