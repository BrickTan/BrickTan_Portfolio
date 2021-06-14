let slideIndex = 0;
let speedSlide=6000;



function showSlides() 
{
   

   let slides = document.getElementsByClassName("slide");

    for (let i=0; i < slides.length; i++) {
       slides[i].classList.add("slide-hide");
    }

    slideIndex++;

    if (slideIndex > slides.length) 
    {
       slideIndex = 1;
    }
      slides[slideIndex-1].classList.remove("slide-hide");
 
   

    console.log(slideIndex);
    
    setTimeout(showSlides, speedSlide);

    
  }
  
  document.addEventListener('DOMContentLoaded', showSlides);