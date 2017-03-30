var mc = {
	abrirCamara: function(){
		cordova.plugins.barcodeScanner.scan(
			  function (result) {
				  alert("Datos Obtenidos\n" +
						"Result: " + result.text);
				  fn.enviarRegistro(result.text);
			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  "preferFrontCamera" : false, // iOS and Android 
				  "showFlipCameraButton" : true, // iOS and Android 
				  "prompt" : "Coloque el codigo en el area especificada", // supported on Android only 
				  "formats" : "QR_CODE,DATA_MATRIX,UPC_E,UPC_A,EAN_8,EAN_13,CODE_128,CODE_39,CODE_93,CODABAR,ITF,RSS14,RSS_EXPANDED,PDF_417", // default: all but PDF_417 and RSS_EXPANDED 
				  "orientation" : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device 
				  "showTorchButton" : true, // iOS and Android 
				  "torchOn": false, // Android, launch with the torch switched on (if available) 
			  }
		);
		
	}
};