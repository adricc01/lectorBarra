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
		//bcs.abrirCamara();
		
		
		$("#botonEscanea").tap(bcs.abrirCamara);
		
	},
	enviarRegistro: function(datosLeidos){
		//alert("Enviando datos");
		//alert("Nombre: "+nombreR+" Email: "+emailR+" Telefono: "+telefonoR+" Password: "+passwordR+" Foto: "+fotoR);
		$.ajax({
			method: "POST",
			url: "http://intranet.cae3076.com:50000/CursoAndroid/obtieneDatos.php",
			data: { 
				datos: datosLeidos
			}
		}).done(function(mensaje){
			//alert("Datos enviados");
			alert(mensaje);
			window.plugins.toast.show(mensaje, 'short', 'center');
			bcs.abrirCamara();
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