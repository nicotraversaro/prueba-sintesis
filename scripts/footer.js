document.getElementById('whatsBtn').addEventListener('click', () => {
    const phone   = '5493794828102';                   
    const message = 'Hola! Necesito una solución 😊';   
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');             
});