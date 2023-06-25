$(document).ready(function() {

    //alert("Aquiiii con jquery");
    $('#listar').on('click', function() {
        let tabla = document.querySelector('#tabla')
        tabla.innerHTML = ''
        $.ajax({
            url: "http://localhost:8080/listarproductos",
            type: "GET",
            datatype: "JSON",
            success: function(respuesta) {
                console.log(respuesta)
                tabla.innerHTML = '';
                for (i = 0; i < respuesta.length; i++) {
                    tabla.innerHTML += '<tr><td>' + respuesta[i].referencia +
                        '</td><td>' + respuesta[i].nombre +
                        '</td><td>' + respuesta[i].categoria +
                        '</td><td>' + respuesta[i].preciounitario +
                        '</td><td>' + respuesta[i].cantidad +
                        '</td></tr>';
                }
            }
    
        })
    });
    



    $('#buscar').on('click', function() {
        let id = ($('#id2').val());
        $.ajax({
            url: "http://localhost:8080/buscarproducto/" + id,
            type: "GET",
            datatype: "JSON",
            success: function(respuesta) {
                    alert("Producto_Encontrado " + id);
           
            },
            error:function(){
                alert("ERROR")
            }
        })
        
    });
    $('#eliminar').on('click', function() {
        let categoria = $('#id3').val();
        $.ajax({
            url: "http://localhost:8080/eliminarproducto/" + categoria,
            type: "DELETE",
            dataType: "JSON",
            success: function(respuesta) {
                alert("Producto eliminado: " + categoria);
            },
            error: function() {
                alert("ERROR");
            }
        });
    });
    
            $('#actualizar').on('click', function() {
                let referencia = $('#referencia').val();  
                let datos = {
                    nombre: $('#nombre').val(),
                    categoria: $('#categoria').val(),
                    preciounitario: $('#preciounitario').val(),
                    cantidad: $('#cantidad').val(),

                };
                let datosEnvio = JSON.stringify(datos);
                console.log(datosEnvio)
        
                $.ajax({
                    url: "http://localhost:8080/actualizarproductos/" + referencia, 
                    type: "PUT",
                    data: datosEnvio,
                    contentType: "application/JSON",
                    dataType: "JSON",
                    success: function(respuesta) {
                        console.log(respuesta);
                        alert("Producto_Actualizado " +referencia );
                    },
                    error: function(respuesta) {
                        alert("Error en la solicitud");
                    }
                })
            });
        });
        
   



       