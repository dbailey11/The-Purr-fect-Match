
document.addEventListener("DOMContentLoaded", function () {

const addBtn = document.getElementById("user_post");
addBtn.addEventListener("submit", (event) => {
  event.preventDefault();

  // All data comes from the input fields
  const userPost = {
    catName: document.getElementById("catName").value.trim(),
    breed: document.getElementById("breed").value.trim(),
    age: document.getElementById("age").value.trim(),
    zipcode: document.getElementById("zipcode").value.trim(),
    ownerName: document.getElementById("ownerName").value.trim(),
  };

  // Send POST request using the fetch API
  fetch("/api/new", {
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userPost),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success in submitting a post:", data);
      alert(`${userPost.catName} has been added to the marketplace!`);
      window.location.replace("/marketplace");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(error);
    });

  // Dump the content of the input boxes
  document.getElementById("catName").value = "";
  document.getElementById("breed").value = "";
  document.getElementById("age").value = "";
  document.getElementById("zipcode").value = "";
  document.getElementById("ownerName").value = "";
});

})
