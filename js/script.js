//summary,:when the DOM is fully loaded, this script will find the first button on the page and set up a click event. When the button is clicked, a new paragraph saying 'You win a cookie!' will be created and appended to the end of the document body.



//Line 7 has an event listener that waits for the 'DOMContentLoaded' event. Activates when the initial HTML document has been fully loaded and parsed. It doesn't wait for stylesheets, images, and subframes to finish loading.

document.addEventListener('DOMContentLoaded', (event) => { // Wait for the DOM to load

//Selects the first button element on the page using const button = document.querySelector('button'). The querySelector method returns the first Element within the document that matches the specified selector, or group of selectors. In this case, it's looking for a 'button' element.

// Get the button element from the DOM
const button = document.querySelector('button'); // Select the first button element

// The function provided as the second argument to addEventListener will be executed whenever the button is clicked.
button.addEventListener('click', () => { // When the button is clicked

    // When a 'click' event is detected, a new paragraph is created using the 'document.createElement('p')' method. This method creates an HTML element with the tagname specified, which in this case is 'p' for paragraph.

const paragraph = document.createElement('p');// Create a new paragraph element
        

// Setting the text content of a node and its descendants using textContent property.
paragraph.textContent = 'You win a cookie!';// Set the text content of the paragraph
        
//The appendChild method appends a node as the last child of a node. In this case, it's appending the new paragraph to the body of the document.

document.body.appendChild(paragraph);// Append the paragraph to the body element
});// Add a click event listener to the button
});// Wait for the DOM to load
