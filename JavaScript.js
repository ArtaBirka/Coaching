$(function() {
	$('.toggler').on('click', function() {
		$('nav').slideToggle(500);
  });
});

function myFunction(dotsn,moren,btnTextn) {

	var dots = document.getElementById(dotsn);
	var moreText = document.getElementById(moren);
	var btnText = document.getElementById(btnTextn);
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Lasīt vairāk"; 
	  moreText.style.display = "none";
	} 
	
	else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Lasīt mazāk"; 
	  moreText.style.display = "inline";
	}
  }
  
  