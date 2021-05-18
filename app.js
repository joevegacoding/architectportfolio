const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  //these are all the individual links
  const navLinks = document.querySelectorAll(".nav-links li");

  //toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger animation rotate
    burger.classList.toggle("toggle");
  });
};

//when invoking multiple functions

// const app = ()=> {
// call fucntions here
// }
navSlide();

class typeWriter {
  constructor(textElement, words, wait = 2000) {
    this.textElement = textElement;
    this.words = words;
    this.text = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //Current index of word
    const current = this.wordIndex % this.words.length;

    //get full text of current word
    const fullText = this.words[current];

    //check if deleting
    if (this.isDeleting) {
      //Remove character
      this.text = fullText.substring(0, this.text.length - 1);
    } else {
      //add a character
      this.text = fullText.substring(0, this.text.length + 1);
    }

    //insert text into element
    this.textElement.innerHTML = `<span class="section1-text">${this.text}</span>`;

    //Type speed
    let typeSpeed = 250;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //if word is complete
    if (!this.isDeleting && this.text == fullText) {
      //make a pause at end
      typeSpeed = this.wait;
      //set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.text == "") {
      this.isDeleting = false;
      //move to next word
      this.wordIndex++;
      //pause beofre start typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

//init app
function init() {
  const textElement = document.querySelector(".text-type");
  const words = JSON.parse(textElement.getAttribute("data-words"));
  const wait = textElement.getAttribute("data-wait");

  //init type writer

  new typeWriter(textElement, words, wait);
}

// Image slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img-slide");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
