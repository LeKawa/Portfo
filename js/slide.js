window.addEventListener('scroll', event => {
  document.querySelector('.Titlee_Item').style.transform = "translateX(-" + window.scrollY / 1 + "px)"
  console.log(window.scrollY)
  document.querySelector('.Titlee_Item').style.transition = "all .2s ease-out";

})

window.addEventListener('scroll', event => {
  document.querySelector('.Titlee_Img').style.transform = "translateY(-" + window.scrollY / 1.25 + "px)"
  document.querySelector('.Titlee_Img').style.transition = "all .2s ease-out";

})
