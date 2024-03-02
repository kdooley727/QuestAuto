
// Details for each car
const carMap = {
    c1: {
        carName: "suv car 1",
        price: "$00,000",
        image: "suv.jpg",
        alt: "suv car",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        features: "<li>4 Door</li><li>Air Conditioning</li><li>Alloy Wheels</li>"
    },
    c2: {
        carName: "coupe car 2",
        price: "$00,000",
        image: "coupe.jpg",
        alt: "coupe car",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        features: "<li>4 Door</li><li>Air Conditioning</li><li>Alloy Wheels</li>"
    },
    c3: {
        carName: "sedan car 3",
        price: "$00,000",
        image: "sedan.jpg",
        alt: "sedan car",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        features: "<li>4 Door</li><li>Air Conditioning</li><li>Alloy Wheels</li>"
    },
    c4: {
        carName: "sedan car 4",
        price: "$00,000",
        image: "sedan.jpg",
        alt: "sedan car",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        features: "<li>4 Door</li><li>Air Conditioning</li><li>Alloy Wheels</li>"
    },
    c5: {
        carName: "suv car 5",
        price: "$00,000",
        image: "suv.jpg",
        alt: "suv car",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        features: "<li>4 Door</li><li>Air Conditioning</li><li>Alloy Wheels</li>"
    },
    c6: {
        carName: "coupe car 6",
        price: "$00,000",
        image: "coupe.jpg",
        alt: "coupe car",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        features: "<li>4 Door</li><li>Air Conditioning</li><li>Alloy Wheels</li>"
    }
  };

document.addEventListener('DOMContentLoaded', () => {
    const detailsButton = document.querySelectorAll('.detailsLink');
    const modal = document.getElementById('viewDetailsModal');
    const closeButton = document.querySelector('.detailsCloseButton');

    // Load when View Details is clicked
    detailsButton.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const carID = button.getAttribute('data-id');
            console.log(carID);

            // Populate h2 with Car Name
            const name = modal.querySelector("h2");
            name.innerHTML = carMap[carID].carName;

            // Populate img
            const img = modal.querySelector("img")
            img.src = carMap[carID].image;
            img.alt = carMap[carID].alt;

            // Populate h1 with price
            const price = modal.querySelector("h1");
            price.innerHTML = carMap[carID].price;

            // Populate p with car description
            const description = modal.querySelector("p");
            description.innerHTML = carMap[carID].description;

            // Populate ul with car features
            const features = modal.querySelector("ul");
            features.innerHTML = carMap[carID].features;

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

/* 

<div class="detailsModal-content">
<span class="detailsCloseButton">&times;</span>
<img src="coupe.jpg" alt="">
<h2>Car 2</h2>
<p>Heres some more details about your car</p>
<button class="btn">Reserve</button>
</div> */