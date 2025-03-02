
// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add animation to header
  const header = document.querySelector('header');
  if (header) {
    header.style.opacity = '0';
    setTimeout(() => {
      header.style.transition = 'opacity 1s ease-in-out';
      header.style.opacity = '1';
    }, 100);
  }
  
  // Add animation to about section
  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    const elements = aboutSection.children;
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 500 + (i * 300));
    }
  }
  
  // Add animation to content section
  const contentSection = document.querySelector('.content');
  if (contentSection) {
    const elements = contentSection.children;
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + (i * 200));
    }
  }
  
  // Add hover effect to buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
    button.style.transition = 'transform 0.3s, background 0.3s';
  });
});
