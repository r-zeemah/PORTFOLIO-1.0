var smallMenu = document.querySelector(".small-menu");
var menu = document.querySelector(".menu");
var closeIcon = document.querySelector(".close-icon");
var navDisplayToggle = false;


smallMenu.style.display = "none"

menu.addEventListener('click', function(){
    navDisplayToggle = !navDisplayToggle;

  
    smallMenu.style.display = "flex";
    menu.style.display = "none";
  
})
closeIcon.addEventListener('click', function(){
    smallMenu.style.display = "none";
      menu.style.display = "block";
})
