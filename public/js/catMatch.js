//client side JS that is supposed to call an api and display cat breeds

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  var apiKey = "ba5a203d-12da-4353-9e23-cadc647ab31b";

  let breed;
  let temperament;
  let description;

  searchButton.addEventListener("click", getCatBreed);

  function getCatBreed(event) {
    event.preventDefault();

    breed = document.getElementById("search-input").value;
    console.log(breed);

    fetch(
      "https://api.thecatapi.com/v1/breeds/search?q=" +
        breed +
        "api_key=" +
        apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        breedDisplay(data);
      })
      .catch((error) => {
        throw new Error("Breed doesn't exist");
      });

    function breedDisplay(data) {
      let breed = data.name;
      let life_span = data.life_span;
      let temperament = data.temperament;
      let description = data.description;

      let breedName = document.getElementById("breedName");
      let lifeSpan = document.getElementById("lifeSpan");
      let temp = document.getElementById("temperament");
      let descrip = document.getElementById("description");

      breedName.innerHTML = "Breed: " + breed;
      lifeSpan.innerHTML = "Life span: " + life_span;
      temp.innerHTML = "Temperament: " + temperament;
      descrip.innerHTML = "Description: " + description;

      console.log("test", breed);
    }
  }
});

