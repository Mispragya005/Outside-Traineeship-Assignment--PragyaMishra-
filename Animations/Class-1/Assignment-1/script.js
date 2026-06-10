document.addEventListener("DOMContentLoaded", () => {
  
  const observerOptions = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.12 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        if (entry.target.classList.contains('gallery-grid')) {
          const boxes = entry.target.querySelectorAll('.image-box');
          const columnsCount = 4; 

          boxes.forEach((box, index) => {
 
            const row = Math.floor(index / columnsCount);
            const column = index % columnsCount;

            const calculatedDelay = (row * 0.15) + (column * 0.04);
            
            box.style.transitionDelay = `${calculatedDelay}s`;
            box.classList.add('visible');
          });
        } else {

          entry.target.classList.add('visible');
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-fade').forEach(text => observer.observe(text));
  document.querySelectorAll('.gallery-grid').forEach(grid => observer.observe(grid));
});