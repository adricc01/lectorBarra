var mc = {
	exito: function(mediaFiles){
		var path = mediaFiles[0].fullPath;
		//alert(path.replace("file://", ""));
		$("#fotoTomadaRegistro").html('<img src="'+path+'" >');
	},

	error: function(){
		alert("Error al tomar foto");
	},

	abrirCamara: function(){
		cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
		
	}
};