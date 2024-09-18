document.addEventListener('DOMContentLoaded', function() {
  // Preloader functionality
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0'; // Fade out the loader
    preloader.style.visibility = 'hidden'; // Remove it from the view
  }, 1000); // You can adjust the delay here

  // Initialize skill bars and animate when scrolled into view
  const skillSection = document.querySelector('#skills');
  const progressBars = document.querySelectorAll('.progress');

  // Initialize progress bars to 0 width (hidden initially)
  progressBars.forEach((bar) => {
    bar.style.width = '0%';
  });

  // Intersection Observer to trigger animation when skills section comes into view
  const observerOptions = {
    root: null, // The viewport
    threshold: 0.2 // Trigger when 20% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach((bar) => {
          const skillPercent = bar.getAttribute('data-skill-percent');
          bar.style.transition = 'width 1.5s ease'; // Smooth animation
          bar.style.width = skillPercent + '%'; // Animate to the skill percentage
        });
        observer.unobserve(skillSection); // Unobserve to stop observing once animated
      }
    });
  }, observerOptions);

  // Start observing the skill section
  observer.observe(skillSection);
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('.close-btn');
  const sidebarLinks = document.querySelectorAll('.sidebar-links a');

  // Toggle sidebar visibility
  hamburger.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });

  // Close sidebar when close button is clicked
  closeBtn.addEventListener('click', function() {
    navbar.classList.remove('active');
  });

  // Close sidebar when any sidebar link is clicked
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbar.classList.remove('active');
    });
  });
});


