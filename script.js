// Hamburger Menu Toggle

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Toggle menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});



// Testimonia Sliders
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  testimonials[i].classList.add("active");
  dots[i].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index > testimonials.length - 1) index = 0;
  showTestimonial(index);
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = testimonials.length - 1;
  showTestimonial(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showTestimonial(index);
  });
});

// Auto Slide
setInterval(() => {
  index++;
  if (index > testimonials.length - 1) index = 0;
  showTestimonial(index);
}, 5000); 


// popup form
  const popup = document.getElementById("popupForm");
    const openBtn = document.getElementById("openPopup");
    const closeBtn = document.getElementById("closePopup");

    openBtn.onclick = () => {
        popup.style.display = "flex";
        setTimeout(() => popup.style.opacity = "1", 10);
    };

    closeBtn.onclick = () => closePopup();

    window.onclick = (e) => { if (e.target == popup) closePopup(); };

    function closePopup() {
        popup.style.opacity = "0";
        setTimeout(() => popup.style.display = "none", 350);
}