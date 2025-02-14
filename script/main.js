let destinations = [
    {
        title: "CERN - The Large Hadron Collider",
        image: "../images/volcano-8488486_1280.webp",
    },
    {
        title: "NASA Kennedy Space Center",
        image: "../images/chapel-7956274_640.jpg"
    },
    {
        title: "MIT Media Lab",
        image: "../images/landscape-4593909_640.jpg"
    },
    {
        title: "Silicon Valley Tech Hub",
        image: "../images/mountain-8488489_640.jpg"
    },
    {
        title: "Fermilab - Particle Physics Laboratory",
        image: "../images/mountains-8540709_640.jpg"
    },
    {
        title: "JPL - Jet Propulsion Laboratory",
        image: "../images/sunset-8516639_640.webp"
    },
    {
        title: "European Space Agency (ESA)",
        image: "../images/river-7489170_640.jpg"
    },
    {
        title: "Max Planck Institute for Quantum Optics",
        image: "../images/nature-7897648_640.jpg"
    },
    {
        title: "Harvard Science Center",
        image: "../images/polana-kalatowki-7958161_640.jpg"
    },
    {
        title: "Stanford Linear Accelerator Center",
        image: "../images/norway-8593725_640.jpg"
    },
    {
        title: "Tokyo Institute of Technology",
        image: "../images/storm-8244663_640.jpg"
    },
    {
        title: "Indian Space Research Organisation (ISRO)",
        image: "../images/waterfall-8363216_640.jpg"
    },
    {
        title: "London Science Museum",
        image: "../images/animals-8337310_640.jpg"
    },
    {
        title: "National Geographic Explorers Hall",
        image: "../images/mountains-8540709_640.jpg"
    },
    {
        title: "Perimeter Institute for Theoretical Physics",
        image: "../images/islet-8110071_640.jpg"
    }
];

let container = document.querySelector(".container");
destinations.map(function(element) {
    let temp = "";
    temp += `<div class="card">
            <div class="image">
                <img src= "${element.image}" alt="">
            </div>
            <div class="text">
                <h2>${element.title}</h2>
            </div>
            </div>`;
    container.innerHTML += temp;
});
