function cambiarTexto(elemento){
    let nuevoTexto = document.querySelector(".btn-1");
    nuevoTexto.innerText = "Logout";
}

function eliminarBoton(elemento){
    let borrarBoton = document.querySelector(".btn-3")
    borrarBoton.remove();
}

function meGusta(elemento){
    alert("Ninja was liked");
}