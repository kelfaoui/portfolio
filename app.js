const toggler = document.querySelector('.toggler');
const navBar = document.querySelector('.nav-bar');

toggler.addEventListener('click' , function() {
    console.log('chabane')
    navBar.classList.toggle('sticky');
    
})

document.addEventListener('scroll' , function() {
    if(scrollY > 20)
    {
        navBar.classList.add('active');
    }
    else
    {
        navBar.classList.remove('active');
    }
})

 
//  // toggle menu/navbar script
//  $('.menu-btn').click(function(){
//     $('.navbar .menu').toggleClass("active");
//     $('.menu-btn i').toggleClass("active");
// });


const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
