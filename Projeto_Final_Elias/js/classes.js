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