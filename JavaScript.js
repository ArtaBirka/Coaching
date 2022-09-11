var currentIndex = 0;
displaySlides(currentIndex);

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

function setSlides(num) {
    displaySlides(currentIndex += num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
		console.log(slides[x])
    }
	console.log(currentIndex);
	let data = [].map.call(slides, slide => slide);
	console.log(data);
    slides[currentIndex - 1].style.display = "block";
}
  