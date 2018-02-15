/* Slider Script */
(function(){
   const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
   imgs[0].style.opacity = 0.6;
   
   // Arrow change image function
   const changeImg = (e) => {
    imgs.forEach(img => img.style.opacity = 1);
    current.src = e.target.src;
    current.classList.add("fade-in");
    setTimeout(() => current.classList.remove("fade-in")
      ,500);
    e.target.style.opacity = 0.6;
  }
   // Event Listener
   imgs.forEach(img => img.addEventListener('click', changeImg, false));

}());