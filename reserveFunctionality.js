document.addEventListener('DOMContentLoaded', () => {
    // Select all reserve buttons
    const reserveButtons = document.querySelectorAll('.btn');

    reserveButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevents the default anchor action
            // Display a confirmation message
            alert('The car has been reserved.');
        });
    });
});