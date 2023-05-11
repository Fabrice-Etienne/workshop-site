const form = document.querySelector('form');
const nomInput = document.getElementById('nom');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nom = nomInput.value;
    alert('Merci ' + nom + ' pour votre déclaration! Nous allons traiter votre demande dans les plus brefs délais.');
    form.reset();
});