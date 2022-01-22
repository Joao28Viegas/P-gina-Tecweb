var dia = new Date();
	document.getElementById("dia").innerHTML = dia.getDate();

	var m = new Date();
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	document.getElementById("mes").innerHTML = months[m.getMonth()];
	
	
	
	
	function relogio(){
	
		var agora = new Date ();
		var hour = digitos(agora.getHours());
		var min = digitos(agora.getMinutes());
		var sec = digitos(agora.getSeconds());
		
		
		var hora_completa = hour+":"+min+":"+sec;
		
		
		
		document.getElementById("hora").innerHTML = hora_completa;
		setTimeout("relogio()",1000);
		
		}
		
		function digitos(num){
		
		if(num>9)
			return num;
		else
			return ("0"+num);
		
		
		}
		
function openNav() {
  document.getElementById("menu").style.width = "250px";
  document.getElementById("pagina").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("pagina").style.marginLeft = "0";
}

var dropdown = document.getElementsByClassName("topico");
var i;
for (i=0;i<dropdown.length;i++) {
  dropdown[i].addEventListener("click", 
	function() {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
}

/*
function openNav() {
  document.getElementById("menu").style.width = "250px";
}
function closeNav() {
  document.getElementById("menu").style.width = "0px";
}
*/