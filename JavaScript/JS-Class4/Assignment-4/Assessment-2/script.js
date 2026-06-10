const animateBox = (entries, observer) => {
    entries.forEach(entry => {
        const box = entry.target;
        
        if (box.id === 'box1') {
            if (entry.isIntersecting) {
                box.classList.add('rotate');
                observer.unobserve(box);
            }
        }

        if (box.id === 'box2') {
            if (entry.isIntersecting) {
                box.classList.add('rotate');
            } else {
                box.classList.remove('rotate');
            }
        }
    });
};

const options = {
    threshold: 0.5 
};

const observer = new IntersectionObserver(animateBox, options);

observer.observe(document.querySelector('#box1'));
observer.observe(document.querySelector('#box2'));

