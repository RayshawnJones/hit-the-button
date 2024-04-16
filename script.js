// The JavaScript code manipulates the Document Object Model (DOM) and handles events. It starts by selecting a button with the id 'myButton' and then defines a function called 'handleClick' to execute a series of actions when the button is clicked. These actions include logging a message to the console, removing an 'h1' element if it exists, creating a new button, adding an event listener to the new button, and creating and appending image and audio elements. Finally, the handleClick function is assigned as the event handler for the original button's 'click' event.




// Select the button element
const button = document.getElementById('myButton');

// Function to handle the button click
const handleClick = () => {
    console.log('button works'); // Log a message to the console

    // Remove the h1 element
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.remove();
    }

    // Replace the button with another button
    const newButton = document.createElement('button');
    newButton.textContent = 'Please take the cookie';
    button.parentNode.replaceChild(newButton, button);

    // Set up the new button to handle audio and change the image
    newButton.addEventListener('click', () => {
        const audio = document.createElement('audio');
        audio.src = 'assets/audio/jumpscare-154489.mp3';
        audio.play();

        const image = document.createElement('img');
        image.src = 'assets/images/evilcookiemonster.png';
        image.style.width = '100vw';
        image.style.height = '100vh';
        image.style.position = 'fixed';
        image.style.top = '0';
        image.style.left = '0';
        image.style.zIndex = '9999';
        document.body.appendChild(image);

        const anotherButton = document.createElement('button');
        anotherButton.textContent = 'Would you like another cookie?';
        anotherButton.addEventListener('click', () => {
            location.reload();
        });
        document.body.appendChild(anotherButton);
    });

    // Set the initial image source
    const image = document.createElement('img');
    image.src = 'assets/images/cookie-monster.jpg';
    document.body.appendChild(image);
};

// Add an event listener to the button
button.addEventListener('click', handleClick);
