var btn = document.getElementById('btn-colapsar');
var menu = document.getElementById('menu');
var ejec = btn.addEventListener('click',colapsar);

function colapsar(){
	menu.classList.toggle('active');
	btn.classList.toggle('icon-menu');
	btn.classList.toggle('icon-cancel-circle');
}