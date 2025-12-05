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

// --- Modal (Calendly) open/close ---
const modal = document.getElementById('consultModal');
const openBtns = document.querySelectorAll('.open-modal-btn');
const closeBtn = modal?.querySelector('.modal-close');
const backdrop = modal?.querySelector('.modal-backdrop');

// Open modal (adds aria-hidden=false)
openBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    // move focus to modal for accessibility
    const focusTarget = modal.querySelector('[role="document"]') || modal.querySelector('.modal-content');
    (focusTarget || modal).focus();
    document.body.style.overflow = 'hidden';
  });
});

// Close modal via close button
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
}

// Close modal clicking backdrop
if (backdrop) {
  backdrop.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
}

// Close modal with ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});


// --- Filter buttons functionality ---
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

function setActiveFilter(button) {
  filterBtns.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    setActiveFilter(btn);

    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      // Show all or matching category
      if (filter === 'all' || cat === filter) {
        card.style.display = '';
        // small reveal animation:
        card.style.opacity = 0;
        requestAnimationFrame(() => {
          card.style.transition = 'opacity .25s ease';
          card.style.opacity = 1;
        });
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Accessibility: allow keyboard activation of filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});