// Wait for the DOM content to be loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // List of anime images (replace with actual image paths)
  const animeImages = [
    "images/anime1.jpg",
    "images/anime2.jpg",
    "images/anime3.jpg",
    "images/anime4.jpg",
    "images/anime5.jpg",
    "images/anime6.jpg",
    "images/anime7.jpg",
    "images/anime8.jpg",
  ];

  const container = document.getElementById("animeContainer");

  // Function to create image elements and append them to the container
  function createImageElements() {
    animeImages.forEach((image) => {
      const img = document.createElement("img");
      img.src = image;
      img.alt = "Anime Image";
      container.appendChild(img);

      // Add click event listener to each image for the pop-up effect
      img.addEventListener("click", function () {
        displayImageInPopup(image);
      });
    });
  }

  // Function to display image in a pop-up
  function displayImageInPopup(imageSrc) {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    const popupImage = document.createElement("img");
    popupImage.src = imageSrc;
    popupImage.alt = "Popup Image";

    popup.appendChild(popupImage);
    document.body.appendChild(popup);

    // Close the pop-up when clicked outside the image
    popup.addEventListener("click", function (event) {
      if (event.target === popup) {
        popup.remove();
      }
    });
  }

  // Call the function to create image elements when the DOM is ready
  createImageElements();
});
