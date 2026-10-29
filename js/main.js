// Hamburger menu - fixes nav responsiveness
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if(hamburger){
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  console.log('FreshKicks JS loaded - Part 3');
});

// Simple accordion for FAQ
function toggleAccordion(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}