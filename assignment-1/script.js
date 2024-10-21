// Select the necessary DOM elements
const heading = document.getElementById('mainHeading');
const textInput = document.getElementById('textInput');
const changeTextButton = document.getElementById('changeTextButton');

// Add an event listener to the button
// the first argument is the event type
// the second argument is a callback function that will be called when the event is triggered
changeTextButton.addEventListener('click', changeHeadingText);

// Function to change the heading text
function changeHeadingText() {
    const newText = textInput.value;
    heading.textContent = newText; // Update the heading with the new text
}