function showMessage(perfumeType) {
  let message = "";

  switch (perfumeType) {
    case "floral":
      message = "This fragrance is like a blooming garden, symbolizing the beauty and love you’ve given me.";
      break;
    case "woody":
      message = "Grounded, timeless, and strong—this scent is a reflection of your unwavering love.";
      break;
    case "fresh":
      message = "Refreshing and full of life, this scent mirrors your spirit—bright and full of energy.";
      break;
    case "sweet":
      message = "Sweet as the moments we’ve shared, this fragrance carries the warmth of home and love.";
      break;
    default:
      message = "Welcome to the perfume boutique!";
  }

  document.getElementById("message").innerText = message;
  document.getElementById("message-box").style.display = "block";
}

function closeMessage() {
  document.getElementById("message-box").style.display = "none";
}

// Function to generate falling hearts
function generateFallingHearts() {
  const heartContainer = document.getElementById('falling-hearts');
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    // Randomize position and size
    const randomPosition = Math.floor(Math.random() * window.innerWidth) + 'px';
    const randomSize = Math.floor(Math.random() * 20) + 15 + 'px';
    heart.style.left = randomPosition;
    heart.style.fontSize = randomSize;

    // Append the heart to the container
    heartContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 5000); // Time matches the fall animation duration
  }, 500); // Generate new hearts every 500ms
}

// Start falling hearts when the page loads
window.onload = generateFallingHearts;
