var typed = new Typed("#typed", {
      strings: ["a Python Developer", "a Web Developer", "a B.Tech Student"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links a');
   toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
