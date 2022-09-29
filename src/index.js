let breeds = []
document.addEventListener("DOMContentLoaded",(e) => {
  

  // Challenge 1
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  function createDog (data) {
    let image = document.createElement("img")
    image.src = data
    let images = document.getElementById("dog-image-container")
    images.appendChild(image)
  }
    fetch(imgUrl)
    .then ((res) => res.json())
    .then ((data) => {
      data.message.forEach(createDog)
    })

  // Challenge 2
  function createBreeds(key, value) {
    let breedsList = document.getElementById("dog-breeds")
    let breed = document.createElement("li")
    breed.textContent = key
    breedsList.appendChild(breed)

  // was going to do more than it wanted

  //   if (value.length === 0) {
  //   breed.textContent = key
  //   breedsList.appendChild(breed)
  // } else if (value.length !== 0) {
  //   console.log(key)
  // }
  }

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(breedUrl)
  .then((res) => res.json())
  .then((data) => {
    let breedsObject = data.message
    breeds = Object.keys(data.message)

    for (const [key, value] of Object.entries(breedsObject)) {
      
      createBreeds(key, value)
    }
  })
  console.log(breeds)

  // Challenge 3

let breedsList = document.getElementById("dog-breeds")

breedsList.addEventListener("click", (e) => e.target.style.color = "#ff0000")

  // Challenge 4


  let dropdown = document.getElementById("breed-dropdown")

  

  dropdown.addEventListener("change", (e) => {
    console.log(e.target.value)
  
    (breedsList.filter((breed) => console.log(breed.charAt(0) === e.target.value)))
  })

})

