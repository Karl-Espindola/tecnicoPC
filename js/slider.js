$(document).ready(function(){

	var imgSig=0;
	var imgAnt=0;
	var posicion=0;
	
	var imgItems=$(".slider ul li").length;

	$(".slider ul li").hide();
	$(".slider ul li:eq(0)").show();

	$(".izq span").click(anterior);
	$(".der span").click(siguiente);
	
//agregando paginación, por cada imag se agrega un circulo-----
	for(i=1; i<= imgItems; i++){
	$('.pagination ol').append('<li><i class="fas fa-circle margenh1"></i></li>');
	}

	$(".pagination ol li").css({"color":"#22245F"});
	$(".pagination ol li:eq(0)").css({"color":"red"});
	$('.pagination li').click(pagination);//cuando hago click en el elemento li se ejecuta la funcion pagination
	
	function siguiente(){
		imgSig=posicion;
		if (imgSig >= imgItems-1){imgSig=0;}
		else{imgSig++;}
		$(".slider ul li").hide();	
		$(".slider ul li:eq("+imgSig+")").fadeIn();
		$(".pagination ol li").css({"color":"#22245F"});
		$(".pagination ol li:eq("+imgSig+")").css({"color":"red"});
		posicion=imgSig;
	}
	
	function anterior(){
		imgAnt=posicion;
		if (imgAnt==0){imgAnt=imgItems-1}
		else{imgAnt--}

		$(".slider ul li").hide();
		$(".slider ul li:eq("+imgAnt+")").fadeIn();
		$(".pagination ol li").css({"color":"#22245F"});
		$(".pagination ol li:eq("+imgAnt+")").css({"color":"red"});
		posicion=imgAnt;
	}

	function pagination(){
		
		posicion= $(this).index();//guarda la posición en forma de numero del elemento en el que se cliqueo
		$('.slider li').hide();
		$('.slider li:eq('+posicion+')').fadeIn();
		$('.pagination ol li').css({'color':'#22245F'});
		$(this).css({'color':'red'}); //con $(this) nos referimos al elemento cliqueado
		}
	

	setInterval( function(){siguiente()}, 3000);
});
