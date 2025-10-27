// script.js
const text = "Video Editor & Graphic Designer";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // typing speed
  }
}

window.addEventListener("load", typeEffect);

// navigation menu toggle
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');
const navDesk = document.getElementById("nav-desktop");

burger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  burger.classList.toggle('burger-active'); // animate burger
});

// auto close mobile menu when any link is clicked
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
    burger.classList.remove('burger-active');
    
    // Also collapse mobile dropdown if open
    const mobileDropdown = document.getElementById('mobile-projects-dropdown');
    if (mobileDropdown && !mobileDropdown.classList.contains('hidden')) {
      mobileDropdown.classList.add('hidden');
    }
  });
});

// hide mobile nav when resizing to desktop
function handleResize() {
  if (window.innerWidth >= 640) {
    navMenu.classList.add('hidden');
    burger.classList.remove('burger-active');
  }
}
window.addEventListener('resize', handleResize);
handleResize(); // run once on page load

// Projects dropdown toggle in mobile menu
const mobileProjectsBtn = document.getElementById('mobile-projects-btn');
const mobileProjectsDropdown = document.getElementById('mobile-projects-dropdown');

if (mobileProjectsBtn && mobileProjectsDropdown) {
  mobileProjectsBtn.addEventListener('click', () => {
    mobileProjectsDropdown.classList.toggle('hidden');
  });
}


  // Reveal Animation on Scroll
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // arrow up and down
 
  document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.getElementById("backToTop");
    const heroSection = document.getElementById("Hero");

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Hero is in view: hide button
            backToTop.classList.add("opacity-0", "pointer-events-none");
          } else {
            // Hero is out of view: show button
            backToTop.classList.remove("opacity-0", "pointer-events-none");
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.1 // trigger when 10% of Hero is visible
      }
    );

    if (heroSection) {
      observer.observe(heroSection);
    }
  });

  // Initialize EmailJS
  emailjs.init({
    publicKey: "YuWXcw5NK2nZRRHZ4" // ✅ Replace this
  });

  const form = document.getElementById('contact-form');
  const btn = document.querySelector('button[type="submit"]');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    btn.innerText = "Sending...";

    const serviceID = "service_28chuau";     // ✅ Your Service ID
    const templateID = "template_xjdhjy9";   // ✅ Your Template ID

    const formData = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send(serviceID, templateID, formData)
      .then(() => {
        btn.innerText = "Send Message";
        form.reset();
        alert("✅ Email Sent Successfully!");
      })
      .catch((error) => {
        btn.innerText = "Send Message";
        alert("❌ Failed to send email: " + JSON.stringify(error));
      });
  });

