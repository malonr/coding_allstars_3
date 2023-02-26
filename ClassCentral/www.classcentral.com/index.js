document.addEventListener("DOMContentLoaded", () => {

    const element = document.getElementById("courses");
    const nav = document.getElementById("main-nav-dropdown");
  
  
    element.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });
   
  });