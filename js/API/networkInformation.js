var networkInfo = {
	estaConectado: function(){
		alert(navigator.connection.type);
		if(navigator.connection.type != Connection.NONE){
			//return true;
		}
		//return false;
	}
};