window.addEventListener('scroll', event => {
  document.querySelector('.Titlee_Item').style.transform = "translateX(-" + window.scrollY / 2.5 + "px)"
  console.log(window.scrollY)
  document.querySelector('.Titlee_Item').style.transition = "all .3s ease-out";

})
