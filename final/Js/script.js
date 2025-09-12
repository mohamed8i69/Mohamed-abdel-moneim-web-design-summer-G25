var myCarousel = document.querySelector('#myCarousel')
if (myCarousel) {
  var carousel = new bootstrap.Carousel(myCarousel)
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
}


var form = document.getElementById("contactForm")

function validateName() {
  const name = document.getElementById("name").value.trim()
  const error = document.getElementById("nameError")
  if (name.length < 3) {
    error.classList.remove("d-none")
    return false
  } else {
    error.classList.add("d-none")
    return true
  }
}

function validateEmail() {
  const email = document.getElementById("email").value.trim()
  const error = document.getElementById("emailError")
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/
  if (!emailPattern.test(email)) {
    error.classList.remove("d-none")
    return false
  } else {
    error.classList.add("d-none")
    return true
  }
}

function validateSubject() {
  const subject = document.getElementById("subject").value.trim()
  const error = document.getElementById("subjectError")
  if (subject === "") {
    error.classList.remove("d-none")
    return false
  } else {
    error.classList.add("d-none")
    return true
  }
}

function validateMessage() {
  const message = document.getElementById("message").value.trim()
  const error = document.getElementById("messageError")
  if (message.length < 10) {
    error.classList.remove("d-none")
    return false
  } else {
    error.classList.add("d-none")
    return true
  }
}
if (form) {

  document.getElementById("name").addEventListener("input", validateName)
  document.getElementById("email").addEventListener("input", validateEmail)
  document.getElementById("subject").addEventListener("input", validateSubject)
  document.getElementById("message").addEventListener("input", validateMessage)

  // On submit check all
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateName() & validateEmail() & validateSubject() & validateMessage()) {
      form.reset();
    }
  });
}



document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header')
  var topBar = document.getElementById('topBar')
  var middleBar = document.getElementById('middleBar')
  var bottomBar = document.getElementById('bottomBar')
  var backToTop = document.getElementById('backToTop')

  function toggle(el, hide) {
    if (!el) return
    if (hide) {
      el.classList.add('d-none')
    } else {
      el.classList.remove('d-none')
    }
  }

  const triggerPoint = 50
  let scrollTimeout = null

  window.addEventListener('scroll', function () {
    if (!header) return

  
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    
    scrollTimeout = setTimeout(function () {
      if (window.scrollY >= triggerPoint) {
        header.classList.add('position-sticky', 'top-0')
        toggle(topBar, true)
        toggle(middleBar, true)
        toggle(bottomBar, true)
        toggle(backToTop, false)
      } else {
        header.classList.remove('position-sticky', 'top-0')
        toggle(topBar, false)
        toggle(middleBar, false)
        toggle(bottomBar, false)
        toggle(backToTop, true)
      }
    }, 500)
  })
})

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
     items: 5,       
    margin: 0,     
    nav: true,      
    slideBy: 1,     
    loop: true ,
    responsive:{
      0:{
        items:1          
      },
      768:{
        items:3        
      },
      1200:{
        items:5          
      }
    },
    navText :['<i class="fa-solid fa-angle-left position-absolute start-0 bottom-50 py-2 px-3 translate-middle-y bg-black rounded text-white"></i>','<i class="fa-solid fa-angle-right position-absolute end-0 bottom-50 py-2 px-3 translate-middle-y bg-black rounded text-white"></i>']

  });
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})