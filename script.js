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
// ===== BUSINESS GOALS POPUP =====
const openBusinessPopup = document.getElementById('openFormBtn'); // Hero button
const businessPopup = document.getElementById('businessPopup');
const closeBusinessPopup = document.getElementById('closeBusinessPopup');
const businessForm = document.getElementById('businessForm');
const businessSuccess = document.getElementById('businessSuccess');

openBusinessPopup.addEventListener('click', () => {
  businessPopup.style.display = 'flex';
  setTimeout(() => businessPopup.style.opacity = '1', 10);
});

closeBusinessPopup.addEventListener('click', () => closeBusiness());

window.addEventListener('click', (e) => {
  if (e.target === businessPopup) closeBusiness();
});

function closeBusiness() {
  businessPopup.style.opacity = '0';
  setTimeout(() => businessPopup.style.display = 'none', 350);
}

// Form submission with success message
businessForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (businessForm.checkValidity()) {
    businessSuccess.style.display = 'block';
    businessForm.reset();
    setTimeout(() => {
      closeBusiness();
      businessSuccess.style.display = 'none';
    }, 2000);
  }
});

// PORTFLIO


document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.pf-filters button');
  const cards = document.querySelectorAll('.pf-card');
  const modal = document.getElementById('consultModal');
  const openBtns = document.querySelectorAll('.open-modal-btn');
  const closeBtn = document.querySelector('.close-modal');

  // Filter logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
      });
    });
  });

  // Open Calendly modal
  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
