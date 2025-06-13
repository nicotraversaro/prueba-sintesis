window.addEventListener('scroll', () => {
    const scrollThreshold = 50;
        if (window.scrollY > scrollThreshold) {
            document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});