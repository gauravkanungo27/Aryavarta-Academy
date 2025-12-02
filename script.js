// Scroll-triggered animations
const sections = document.querySelectorAll('.section, footer');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Parallax effect for hero elements
const parallaxItems = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  parallaxItems.forEach((item, index) => {
    let speed = 0.2 + index * 0.1; // different speeds for logo, title, tagline
    item.style.transform = `translateY(${scrollY * speed}px)`;
  });
});