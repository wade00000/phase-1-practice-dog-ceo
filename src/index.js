console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", () => {
    const imageList = document.querySelector("#dog-image-container");
    const breedList = document.querySelector("#dog-breeds");
    const breedDropdown = document.querySelector("#breed-dropdown");
    let allBreeds = {}; // Store all breeds globally

    // Fetch and display dog images
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                img.alt = "A cute dog";
                imageList.appendChild(img);
            });
        })
        .catch(error => console.error("Couldn't fetch images:", error));

    // Fetch dog breeds and store them
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => {
            allBreeds = data.message; // Store breed data globally
            displayBreeds(Object.keys(allBreeds)); // Display all breeds initially
        })
        .catch(error => console.error("Couldn't fetch breeds:", error));

    // Function to display breeds
    function displayBreeds(breeds) {
        breedList.innerHTML = ""; // Clear existing list
        breeds.forEach(breed => {
            const li = document.createElement("li");
            li.textContent = breed;

            // Click event to change text color
            li.addEventListener("click", () => {
                li.style.color = "#ff0000";
            });

            breedList.appendChild(li);
        });
    }

    // Filter breeds based on dropdown selection
    breedDropdown.addEventListener("change", (event) => {
        const selectedLetter = event.target.value;
        const filteredBreeds = Object.keys(allBreeds).filter(breed => breed.startsWith(selectedLetter));
        displayBreeds(filteredBreeds);
    });
});
