// Implement Reserve
document.addEventListener('DOMContentLoaded', () => {
    const reserveButtons = document.querySelectorAll('.btn');
    const modal = document.getElementById('reservationModal');
    const closeButton = document.querySelector('.close-button');

    reserveButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            modal.style.display = 'block'; // Show the modal
        });
    });

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
