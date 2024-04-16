// Selects first button
const button = document.getElementById('myButton');

const handleClick = () => { // Function to handle the button click
    console.log('button works');// Log a message to the console

    // Remove the h1 element
    const h1 = document.querySelector('h1');// Select the first h1 element
    if (h1) {// Check if the h1 element exists
        h1.remove();// Remove the h1 element
    }// End of the if statement

    // Replace the button with another button
    const newButton = document.createElement('button');// Create a new button element
    newButton.textContent = 'Please take the cookie';// Set the text content of the new button
    button.parentNode.replaceChild(newButton, button);// Replace the old button with the new button

    // Set up the new button to handle audio and change the image
    newButton.addEventListener('click', () => {// Add an event listener to the new button
        const audio = document.createElement('audio');// Create an audio element
        audio.src = 'assets/audio/jumpscare-154489.mp3';// Set the source of the audio file
        audio.play();// Play the audio file

        const image = document.createElement('img');// Create an image element
        image.src = 'assets/images/evilcookiemonster.png';// Set the source of the image file
        document.body.appendChild(image);// Append the image to the body element
    });

    // Set the initial image source
    const image = document.createElement('img');// Create an image element
    image.src = 'assets/images/cookie-monster.jpg';// Set the source of the image file
    document.body.appendChild(image);// Append the image to the body element
};

// Initialize click count
let clickCount = 0;

newButton.addEventListener('click', () => {
    clickCount++; // Increment click count on each click

    if (clickCount === 2) {
        // Hide the initial image on the second click
        const initialImage = document.querySelector('img[src="assets/images/cookie-monster.jpg"]');
        if (initialImage) {
            initialImage.style.display = 'none';
        }
    }

    const audio = document.createElement('audio');
    audio.src = 'assets/audio/jumpscare-154489.mp3';
    audio.play();

    const image = document.createElement('img');
    image.src = 'assets/images/evilcookiemonster.png';
    document.body.appendChild(image);
});
button.addEventListener('click', handleClick);// Add an event listener to the button
