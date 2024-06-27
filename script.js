document.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.getElementById("current-image");
  const button = document.createElement("button"); // Create button dynamically
  button.textContent = "➤"; // Set button text
  button.className = "transparent-arrow"; // Apply CSS class

  // Create a container to position the button below the image
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container"); // Add a class for styling
  imageContainer.appendChild(imageElement);
  imageContainer.appendChild(button);

  // Position the button absolutely within the container
  button.style.position = "absolute";
  button.style.bottom = "0"; // Place it at the bottom
  button.style.left = "50%"; // Center it horizontally
  button.style.transform = "translate(-50%)"; // Adjust for centering

  document.body.appendChild(imageContainer); // Append the container to the body

  let imageIndex = 0; // Keeps track of the current image index, starting from 0

  const images = [
    // Array containing absolute image source paths
    "nike air jordan sneakers/28.png",
    "nike air jordan sneakers/25.png",
    "nike air jordan sneakers/26.png",
    "nike air jordan sneakers/27.png",
    // Add more absolute image paths here
  ];

  button.addEventListener("click", function () {
    imageIndex++; // Increment image index on button click

    // Handle reaching the end of the image array
    if (imageIndex >= images.length) {
      imageIndex = 0;
    }

    console.log(`Current Image Index: ${imageIndex}`); // Log current index
    console.log(`New Image Source: ${images[imageIndex]}`); // Log new image source

    imageElement.src = images[imageIndex]; // Update image source
  });
});
