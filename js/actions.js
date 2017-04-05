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
		fn.compruebaSesion();
		$("#botonEscanea").tap(bcs.abrirCamara);
		$("#botonIniciarSesion").tap(fn.iniciarSesion);
		//window.localStorage.setItem("nombreUsuario", "adominguez");
		
		
	},
	iniciarSesion: function(){
		var usuario = $("#usuarioSesion").val();
		var password = $("#passwordSesion").val();
		try{
			if(usuario == ""){
				throw new Error("Especifique su usuario");
			}
			if(password == ""){
				throw new Error("Especifique su contraseña");
			}
			fn.enviarSesion(usuario, password);
		}catch(error){
			window.plugins.toast.show(error, 'short', 'center');
		}
	},
	compruebaSesion: function(){
		if(window.localStorage.getItem("nombreUsuario") != null){
			window.location.href="#inicio";
		}
	},
	enviarSesion: function(usuario, password){
		//alert("Enviando datos");
		//alert("Nombre: "+nombreR+" Email: "+emailR+" Telefono: "+telefonoR+" Password: "+passwordR+" Foto: "+fotoR);
		$.ajax({
			method: "POST",
			url: "http://intranet.cae3076.com:50000/CursoAndroid/compruebaSesion.php",
			data: { 
				usu: usuario,
				pass: password
			}
		}).done(function(mensaje){
			//alert("Datos enviados");
			window.plugins.toast.show(mensaje, 'long', 'center');
			window.localStorage.setItem("nombreUsuario", usuario);
			window.location.href="#inicio";
			//alert(mensaje);
			//fn.sleep(3000);
			//bcs.abrirCamara().delay( 3000 );
		}).fail(function(error){
			alert(error.status);
			alert(error.message);
			alert(error.responseText);
		});
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
			window.plugins.toast.show(mensaje, 'long', 'center');
			//alert(mensaje);
			fn.sleep(3000);
			//bcs.abrirCamara().delay( 3000 );
		}).fail(function(error){
			alert(error.status);
			alert(error.message);
			alert(error.responseText);
		});
	},
	sleep: function(milisegundos){
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milisegundos){
				break;
			}
		}
		bcs.abrirCamara();
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
fn.deviceready();