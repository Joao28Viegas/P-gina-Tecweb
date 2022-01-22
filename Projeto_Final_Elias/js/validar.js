

		do{
			var utilizador=window.prompt("Nome do utilizador?");
		
		}while(utilizador=="");
		
		do{
			
		var pass=window.prompt("Password?");
		}while(pass=="");
	
		do{
			var x=window.prompt("Confirmar password");
			if (x==pass)
				alert ("Account successfully created!");
		}while(x!=pass);
		document.getElementById("utilizador").value=utilizador;
		document.getElementById("pass").value=pass;
		
		






function validar(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var utilizador = document.getElementById("utilizador").value;
	var pass = document.getElementById("pass").value;

	if ( (username == utilizador) && (password == pass)){
		alert ("Successfully entered!");
		return true;
	}
	else{
		alert ("Wrong username or password!");
		document.getElementById("username").focus();
		return false;
}
}

