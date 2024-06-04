var Comics = []
Comics.push(new comics("00001", "Rumiko Takahashi", "ranma 1/2", "Planeta Cómic", "1", "MANGA",
    "NUEVO", "30", "11000", "JAPON", "BLANDA", "COMEDIA"))


function listarComics() {
    var filas = "";
    for (let i = 0; i < Comics.length; i++) {
        var c = Comics[i];
        filas = filas + "<tr>";
        filas = filas + "<td>" + c.codigo.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.autor.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.titulo.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.editorial.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.edicion.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.tipo.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.estado.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.paginas.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.precio.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.origen.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.tapa.toUpperCase() + "</td>";
        filas = filas + "<td>" + c.genero.toUpperCase() + "</td>";
        filas = filas + "</tr>";
    }
    document.getElementById("tabladedatos").innerHTML = filas;
}
document.addEventListener("DOMContentLoaded", function () { listarComics() });

function limpiarCampos(x) {
    if (x === 1) {
        document.getElementById("txtcod").value = "";
    }
    document.getElementById("txtaut").value = "";
    document.getElementById("txtedit").value = "";
    document.getElementById("txttit").value = "";
    document.getElementById("txtedi").value = "";
    document.getElementById("cbotip").value = "";
    document.getElementById("opestn").checked = true;
    document.getElementById("txtpage").value = "";
    document.getElementById("txtpre").value = "";
    document.getElementById("cbopais").value = "";
    document.getElementById("optipd").checked = true;
    document.getElementById("cbogen").value = "";
}

function consultar() {
    var cod = document.getElementById("txtcod").value;
    if (cod.trim().length < 1 || cod.trim().length > 5) {
        alert("Debe digitar un codigo para buscar!");
        document.getElementById("txtcod").value = "";
        document.getElementById("txtcod").focus();
    } else {
        let sw = 0;
        for (let i = 0; i < Comics.length; i++) {
            var c = Comics[i];
            if (cod === c.codigo) {
                sw = 1;
                document.getElementById("txtaut").value = c.autor;
                document.getElementById("txtedit").value = c.editorial;
                document.getElementById("txttit").value = c.titulo;
                document.getElementById("txtedi").value = c.edicion;
                document.getElementById("cbotip").value = c.tipo;
                if (c.estado === "NUEVO") {
                    document.getElementById("opestn").checked = true;
                } else {
                    document.getElementById("opestu").checked = true;
                }
                document.getElementById("txtpage").value = c.paginas;
                document.getElementById("txtpre").value = c.precio;
                document.getElementById("cbopais").value = c.origen;
                if (c.tapa === "DURA") {
                    document.getElementById("optipd").checked = true;
                } else {
                    document.getElementById("optipb").checked = true;
                }
                document.getElementById("cbogen").value = c.genero;
            }
        }
        var msg = "";
        if (sw === 0) {
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>El comic no esta registrado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        } else if (sw === 1) {
            msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Comic encontrado con exito!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
    }
}

function registrar() {
    var cod = document.getElementById("txtcod").value.toUpperCase();
    var aut = document.getElementById("txtaut").value.toUpperCase();
    var edit = document.getElementById("txtedit").value.toUpperCase();
    var tit = document.getElementById("txttit").value.toUpperCase();
    var edi = document.getElementById("txtedi").value.toUpperCase();
    var page = document.getElementById("txtpage").value.toUpperCase();
    var pre = document.getElementById("txtpre").value.toUpperCase();
    var tip = document.getElementById("cbotip").value.toUpperCase();
    var pais = document.getElementById("cbopais").value.toUpperCase();
    var gen = document.getElementById("cbogen").value.toUpperCase();

    var est = "";
    if (document.getElementById("opestn").checked) {
        est = "NUEVO";
    } else {
        est = "USADO";
    }

    var tipt = "";
    if (document.getElementById("optipd").checked) {
        tipt = "DURA";
    } else {
        tipt = "BLANDA";
    }

    var errores = "";
    if (cod.trim().length === 0 || cod.trim().length > 5) {
        errores += "El código debe ser de 1 a 5 caracteres! \n";
    } else {
        for (let i = 0; i < Comics.length; i++) {
            var c = Comics[i];
            if (cod === c.codigo) {
                errores += "El código ya se encuentra registrado!\n";
                break;
            }
        }
    }

    if (aut.trim().length < 5 || aut.trim().length > 30) {
        errores += "El autor debe contener entre 5 y 30 caracteres! \n";
    }

    if (edit.trim().length < 5 || edit.trim().length > 30) {
        errores += "La editorial debe contener entre 5 y 30 caracteres! \n";
    }

    if (tit.trim().length < 5 || tit.trim().length > 30) {
        errores += "El título debe contener entre 5 y 30 caracteres! \n";
    }

    if (edi.trim().length < 1 || edi.trim().length > 30) {
        errores += "La edición debe contener entre 1 y 30 caracteres! \n";
    }

    if (tip.trim().length === 0) {
        errores += "Debe ingresar el tipo! \n";
    }

    if (page.trim().length <= 0) {
        errores += "La cantidad de páginas debe ser mayor a 0\n";
    }

    if (pre.trim().length <= 0) {
        errores += "El precio debe ser mayor a 0\n";
    }

    if (pais.trim().length === 0) {
        errores += "Debe ingresar un país de origen! \n";
    }

    if (gen.trim().length === 0) {
        errores += "Debe ingresar un género! \n";
    }

    if (errores !== "") {
        alert(errores);
    } else {
        var c = new comics(cod, aut, tit, edit, edi, tip, est, page, pre, pais, tipt, gen);
        Comics.push(c);

        var msg = "";
        msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
        msg += "<strong>Comic registrado correctamente!</strong>";
        msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
        msg += "</div>";
        document.getElementById("mensajes").innerHTML = msg;
        listarComics();
        limpiarCampos();
    }
}


function modificar() {
    var cod = document.getElementById("txtcod").value.toUpperCase();
    var aut = document.getElementById("txtaut").value.toUpperCase();
    var tit = document.getElementById("txttit").value.toUpperCase();
    var edit = document.getElementById("txtedit").value.toUpperCase();
    var edi = document.getElementById("txtedi").value.toUpperCase();
    var page = document.getElementById("txtpage").value.toUpperCase();
    var pre = document.getElementById("txtpre").value.toUpperCase();
    var tip = document.getElementById("cbotip").value.toUpperCase();
    var pais = document.getElementById("cbopais").value.toUpperCase();
    var gen = document.getElementById("cbogen").value.toUpperCase();

    var est = "";
    if (document.getElementById("opestn").checked) {
        est = "NUEVO";
    } else {
        est = "USADO";
    }

    var tipt = "";
    if (document.getElementById("optipd").checked) {
        tipt = "DURA";
    } else {
        tipt = "BLANDA";
    }

    var errores = "";
    if (cod.trim().length === 0 || cod.trim().length > 5) {
        errores += "El código debe ser de 1 a 5 caracteres! \n";
    } else {
        let x = 0;
        for (let i = 0; i < Comics.length; i++) {
            var c = Comics[i];
            if (cod === c.codigo) {
                x = 1;
                break;
            }
        }
        if (x === 0) {
            errores += "El código no se encuentra registrado!\n";
        }
    }

    if (aut.trim().length < 5 || aut.trim().length > 30) {
        errores += "El autor debe contener entre 5 y 30 caracteres! \n";
    }

    if (tit.trim().length < 5 || tit.trim().length > 30) {
        errores += "El título debe contener entre 5 y 30 caracteres! \n";
    }

    if (edit.trim().length < 5 || edit.trim().length > 30) {
        errores += "La editorial debe contener entre 5 y 30 caracteres! \n";
    }

    if (edi.trim().length < 1 || edi.trim().length > 30) {
        errores += "La edición debe contener entre 1 y 30 caracteres! \n";
    }

    if (page.trim().length === 0 || page <= 0) {
        errores += "El número de páginas debe ser un número positivo! \n";
    }

    if (pre.trim().length === 0 || pre <= 0) {
        errores += "El precio debe ser un número positivo! \n";
    }

    if (pais.trim().length === 0) {
        errores += "Debe ingresar el país de origen! \n";
    }

    if (gen.trim().length === 0) {
        errores += "Debe ingresar el género! \n";
    }

    if (errores !== "") {
        alert(errores);
    } else {
        var sw = 0;
        for (let i = 0; i < Comics.length; i++) {
            var c = Comics[i];
            if (cod === c.codigo) {
                var x = confirm("Desea modificar el registro?");
                if (x === true) {
                    sw = 1;
                    Comics[i].autor = aut;
                    Comics[i].titulo = tit;
                    Comics[i].editorial = edit;
                    Comics[i].edicion = edi;
                    Comics[i].tipo = tip;
                    Comics[i].estado = est;
                    Comics[i].paginas = page;
                    Comics[i].precio = pre;
                    Comics[i].origen = pais;
                    Comics[i].tapa = tipt;
                    Comics[i].genero = gen;
                    break;
                } else {
                    sw = 2;
                }
            }
        }

        var msg = "";
        if (sw === 0) {
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong>Comic no encontrado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        } else if (sw === 1) {
            msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
            msg += "<strong>Comic modificado correctamente!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        } else if (sw === 2) {
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong>El comic no fue modificado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarComics();
        limpiarCampos();
    }
}

function eliminar() {
    var cod = document.getElementById("txtcod").value.toUpperCase();

    var errores = "";
    if (cod.trim().length < 1 || cod.trim().length > 5) {
        errores += "El código debe contener entre 1 y 5 caracteres! \n";
    } else {
        let x = 0;
        for (let i = 0; i < Comics.length; i++) {
            var c = Comics[i];
            if (cod === c.codigo) {
                x = 1;
                break;
            }
        }
        if (x === 0) {
            errores += "El código no se encuentra registrado!\n";
        }
    }

    if (errores !== "") {
        alert(errores)
    } else {
        var sw = 0;
        for (let i = 0; i < Comics.length; i++) {
            var c = Comics[i];
            if (cod === c.codigo) {
                var x = confirm("Desea eliminar el registro?");
                if (x === true) {
                    sw = 1;
                    Comics.splice(i, 1);
                    break;
                } else {
                    sw = 2;
                }
            }
        }

        var msg = "";
        if (sw === 0) {
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong>Comic no encontrado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        } else if (sw === 1) {
            msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
            msg += "<strong>Comic eliminado correctamente!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        } else if (sw === 2) {
            msg += "<div class='alert alert-warning alert-dismissible fade show' role='alert'>";
            msg += "<strong>El comic no fue eliminado!</strong>";
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>";
            msg += "</div>";
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarComics();
        limpiarCampos();
    }
}