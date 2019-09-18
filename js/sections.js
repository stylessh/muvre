const features = document.querySelectorAll('.features .card');

features.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        features.forEach(feature => feature.classList.add('blur'));
        feature.classList.remove('blur');
    });

    feature.addEventListener('mouseleave', () => {
        features.forEach(feature => feature.classList.remove('blur')); 
    })
})