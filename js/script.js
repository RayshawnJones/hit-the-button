// Selects first button
const button = document.querySelector('button');

const audio = document.createElement('audio');

const image = document.createElement('img');

const h1 = document.querySelector('h1');

document.addEventListener('DOMContentLoaded', (event) => {
    const handleClick = () => { 
        button.removeEventListener('click', handleClick);
        h1.remove();
        button.remove();

        // Create an audio element
        const audio = document.createElement('audio');

        // Set the source of the audio file
        audio.src = './assets/jumpscare-154489.mp3';

        // Play the audio when the button is clicked
        audio.play();

        // Create a new paragraph element
        const paragraph = document.createElement('p');

        // Set the text content of the paragraph
        paragraph.textContent = 'You win a cookie!';

        // Append the paragraph to the body element
        document.body.appendChild(paragraph);

        image.src = './assets/images/cookie-monster.jpg';

        paragraph.appendChild(image);
    };

    button.addEventListener('click', handleClick); // Add the click event listener to the button
});