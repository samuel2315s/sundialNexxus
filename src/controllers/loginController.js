const usuarios = [];

document.querySelector(".btn-enviar").addEventListener("click", () => {

    const cc = document.getElementById("cc").value;
    const contrasena = document.getElementById("contrasena").value;
    const codigoEmpresa = document.getElementById("codigoEmpresa").value;

    if (!cc || !contrasena || !codigoEmpresa) {
        alert("Todos los campos son obligatorios");
        return;
    }


    const usuario = {
        cc,
        contrasena,
        codigoEmpresa
    };

    usuarios.push(usuario);

    console.log(usuarios);

    alert("Datos guardados");
});