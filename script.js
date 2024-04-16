// JavaScript code can be used to manipulate a webpage. The code mainly focuses on a button element and what happens when it's clicked. First, the code finds a button by its ID 'myButton' and sets it as a constant called "button". The code then defines a function called "handleClick". This function performs a sequence of actions when the button is clicked. It starts by looking for an h1 element and deletes it if it exists. Next, the function creates a new button with the text "Please take the cookie" and replaces the original button with this new one. It then sets up the new button to handle a click event that creates and plays an audio element and appends an image to the body of the document. The audio source file and image source file are specified and the image is styled to cover the entire viewport. Lastly, the function creates another image element, sets its source file, and appends it to the body of the document. This image is different from the one created when the new button is clicked. Finally, the code adds an event listener to the original button that triggers the handleClick function when the button is clicked.

// Select the button element
const button = document.getElementById('myButton');

// Function to handle the button click
const handleClick = () => {
    // Remove the h1 element
    const h1 = document.querySelector('h1'); // Select the first h1 element
    if (h1) { // Check if h1 element exists
        h1.remove();// Remove the h1 element
    }// End of if statement

    // Replace the button with another button
    const newButton = document.createElement('button');// Create a new button element
    newButton.textContent = 'Please take a cookie';// Set the text content of the new button
    button.parentNode.replaceChild(newButton, button);// Replace the original button with the new button

    // Set up the new button to handle audio and change the image
    newButton.addEventListener('click', () => {// Add an event listener to the new button
        // Create and play audio
        const audio = document.createElement('audio');
        audio.src = 'assets/audio/jumpscare-154489.mp3';
        audio.play();

        // Create and append image
        const image = document.createElement('img');//first line const image = document.createElement('img'); creates a new HTML image element. This doesn't add the image to the webpage yet, it just creates a new image object in JavaScript.
        
        image.src = 'assets/images/evilcookiemonster.png'; //second line image.src = 'assets/images/evilcookiemonster.png'; sets the source of the image to a file named evilcookiemonster.png in the images folder.
        
        image.style.width = '100vw'; //third line image.style.width = '100vw'; sets the width of the image to 100% of the viewport width.
       
        image.style.height = '100vh'; //fourth line image.style.height = '100vh'; sets the height of the image to 100% of the viewport height.
       
        image.style.position = 'fixed'; //fifth line image.style.position = 'fixed'; sets the position of the image to fixed, which means it will stay in the same place on the screen even when the user scrolls.
        image.style.top = '0';
        image.style.left = '0';
        image.style.zIndex = '9999'; //sixth line image.style.zIndex = '9999'; sets the z-index of the image to 9999, which ensures that it appears on top of other elements on the page.
        document.body.appendChild(image); //seventh line document.body.appendChild(image); appends the image to the body of the document, making it visible on the webpage.
    });

    // Set the initial image source
    const image = document.createElement('img'); // Create a new image element
    image.src = 'assets/images/cookie-monster.jpg'; // Set the source of the image
    document.body.appendChild(image); // Append the image to the body
};

// Add an event listener to the button
button.addEventListener('click', handleClick); //

