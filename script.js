// Select the image element
const img = document.querySelector('img');
const p = document.querySelector('p');

// Set initial position and velocity
let posX = 0;
let posY = 0;
let velocityX = 5;
let velocityY = 6;

// Function to move the image
function moveImage() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;

    // Update position
    posX += velocityX;
    posY += velocityY;

    // Check for collisions with walls
    if (posX + imgWidth > containerWidth || posX < 0) {
        velocityX *= -1; // Reverse direction
    }
    if (posY + imgHeight > containerHeight || posY < 0) {
        velocityY *= -1; // Reverse direction
    }

    // Apply new position
    img.style.transform = `translate(${posX}px, ${posY}px)`;
    p.style.transform = `translate(${posX}px, ${posY}px)`;

    // Request the next frame
    requestAnimationFrame(moveImage);
}

// Start the animation
moveImage();