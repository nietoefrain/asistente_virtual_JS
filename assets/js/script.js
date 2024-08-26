var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesites.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas");


function boletasypagos() {
    var opcion = prompt("Seleccione una opción\n1.- Ver Boleta\n2.- Pagar cuenta");
    switch (opcion) {
        case "1":
            alert("Haga clic aquí para descargar su boleta.");
            break;
        case "2":
            alert("Usted está siendo transferido. Espere por favor...");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.");
            boletasypagos();
            break;
    }
}

function senal() {
    var opcion = prompt("Seleccione una opción:\n1.- Problemas con la señal\n2.- Problemas con las llamadas");
    switch (opcion) {
        case "1":
        case "2":
            var solicitud = prompt("A continuación, escriba su solicitud:");
            alert("Estimado usuario, su solicitud: \"" + solicitud + "\" ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.");
            senal();
            break;
    }
}

function oferta() {
    var opcion = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades!\nPara conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'.");
    if (opcion.toUpperCase() === "SI") {
        alert("Un ejecutivo contactará con usted.");
    } else if (opcion.toUpperCase() === "NO") {
        alert("Gracias por preferir nuestros servicios.");
    } else {
        alert("Respuesta no válida. Por favor, ingrese 'SI' o 'NO'.");
        oferta();
    }
}

function otraconsulta() {
    var consulta = prompt("A continuación, escriba su consulta:");
    if (consulta) {
        alert("Estimado usuario, su consulta: \"" + consulta + "\" ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
    } else {
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.");
    }
}

switch (opcion) {
    case "1":
        boletasypagos();
        break;
    case "2":
        senal();
        break;
    case "3":
        oferta();
        break;
    case "4":
        otraconsulta();
        break;
    default:
        // Mensaje cuando se ingresa una opción no válida
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.");
        break;
}
