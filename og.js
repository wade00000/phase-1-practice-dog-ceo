console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded",()=>{
    const imageList = document.querySelector("#dog-image-container")
    const breedList = document.querySelector('#dog-breeds')
    

        fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res=>res.json())
        .then(data => {
            
            data.message.forEach(imageUrl => {
                const img = document.createElement("img"); // Create an image element
                img.src = imageUrl; // Set the image source
                img.alt = "A Random Dog"; 
                img.style.width = "200px"; // Optional styling
                img.style.margin = "10px";
                imageList.appendChild(img); // Append image to container)
        }
    )})
        .catch(error=>console.error("Couldn't fetch images"))

    
    
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(res=>res.json())
        .then(data=>{
            Object.keys(data.message).forEach(breed => { 
                const li = document.createElement("li"); // Create list item
                li.textContent = breed; // Set breed name
                li.classList.add("breed-names")
                breedList.appendChild(li); // Append to list

                li.addEventListener("click",()=>{
                    li.style.color = "red"
                })
              });
})
        .catch(console.error("Couldn't get breeds"))

        



        })

        

        

