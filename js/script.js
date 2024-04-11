/*-------------- Constants -------------*/

const button = document.querySelector('button'); // Select the first button element

const paragraph = document

const audio = document.createElement('audio');

const image = document.createElement('img');

const h1 = document.querySelector('h1');


/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/

//summary,:when the DOM is fully loaded, this script will find the first button on the page and set up a click event. When the button is clicked, a new paragraph saying 'You win a cookie!' will be created and appended to the end of the document body.



//Line 7 has an event listener that waits for the 'DOMContentLoaded' event. Activates when the initial HTML document has been fully loaded and parsed. It doesn't wait for stylesheets, images, and subframes to finish loading.

document.addEventListener('DOMContentLoaded', (event) => { // Wait for the DOM to load 

    // Get the button element from the DOM
    // const button = document.querySelector('button'); // Select the first button element

    // The function provided as the second argument to addEventListener will be executed whenever the button is clicked.
    const handleClick = () => { // When the button is clicked

        // Remove the event listener from the button
        button.removeEventListener('click', handleClick);
        h1.remove();
        button.remove();

        // Create an audio element
        const audio = document.createElement('audio');

        // Set the source of the audio file
        audio.src = './BTN/jumpscare-154489.mp3';

        // Play the audio when the button is clicked
        audio.play();

        // Create a new paragraph element
        const paragraph = document.createElement('p');

        // Set the text content of the paragraph
        paragraph.textContent = 'You win a cookie!';

        // Append the paragraph to the body element
        document.body.appendChild(paragraph);

        // Create an image element
        const image = document.createElement('img');

        // Set the source of the image file
        image.src = '/Images/Cookie Monster .webp';

        // Append the image to the paragraph element
        paragraph.appendChild(image);
    };

    button.addEventListener('click', handleClick); // Add the click event listener to the button
});
