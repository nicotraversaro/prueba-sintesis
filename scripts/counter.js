
window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.skill').forEach(skill => {
        const circle = skill.querySelector('circle');
        const radius = circle.r.baseVal.value;         
        const len    = 2 * Math.PI * radius;          

        circle.style.strokeDasharray  = len;         
        circle.style.strokeDashoffset = len;        
        circle.style.transform        = 'rotate(-90deg)';
        circle.style.transformOrigin  = 'center';

        skill.dataset.len = len;
    });


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            startGauge(entry.target);          
            observer.unobserve(entry.target);
        }
        });
    }, {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -10% 0px'          
    });

    document.querySelectorAll('.skill').forEach(skill => observer.observe(skill));

    function startGauge(skill){
        const circle   = skill.querySelector('circle');
        const counter  = skill.querySelector('.number');
        const target   = +skill.dataset.value || 100;
        const len      = +skill.dataset.len;    
        const duration = 1500;

        const t0 = performance.now();
        (function animate(t){
        const p = Math.min((t - t0) / duration, 1);
        circle.style.strokeDashoffset = len * (1 - p);   
        if (counter) counter.textContent = Math.round(target * p);
        if (p < 1) requestAnimationFrame(animate);
        })(t0);
    }
});

