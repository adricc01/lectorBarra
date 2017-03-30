var fn = {
	deviceready: function(){
		//alert();
		document.addEventListener("deviceready", fn.init/*this.init*/, false);
	},
	init: function(){
		/*
		 * En esta sección vamos a asociar
		 * todos los eventos del "Click" al HTML
		 */
		$("#botonRegistrar1").tap(mc.abrirCamara);
	},
	enviarRegistro: function(datosLeidos){
		//alert("Enviando datos");
		//alert("Nombre: "+nombreR+" Email: "+emailR+" Telefono: "+telefonoR+" Password: "+passwordR+" Foto: "+fotoR);
		$.ajax({
			method: "POST",
			url: "http://www.colors.edu.mx/archivoTest.php",
			data: { 
				lectura: datosLeidos
			}
		}).done(function(mensaje){
			//alert("Datos enviados");
			alert("Datos guardados correctamente: "+mensaje);
		}).fail(function(error){
			alert(error.status);
			alert(error.message);
			alert(error.responseText);
		});
	}
	
};
/*
 *Llamar al metodo Init en el navegador
 */
//fn.init();

/*
 *Llamar deviceready para compilar
 */
//
//$(fn.deviceready());
fn.deviceready();