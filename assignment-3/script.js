// Sla de buttons in variabelen op.
const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');

// sla de tekst op in een variabele.
const text = document.querySelector('.text-elements');

redButton.onclick = () => {ChangeColor(text, 'red')};
greenButton.onclick = () => {ChangeColor(text, 'green')};
blueButton.onclick = () => {ChangeColor(text, 'blue')};

// Dit is een functie om de kleur te veranderen
// De functie accepteert twee argumenten: element en color
// element is het DOM-element dat je wilt veranderen
// color is de kleur die je wilt toepassen
function ChangeColor(element, color) {
    element.style.color = color;
}

/* Extra moeilijkheidsgraad opdracht 3:

// selecteer alle tekst elementen (tip: gebruik querySelectorAll)
const textElements = ?

// loop door alle text-elementen en verander de kleur op basis van de button die is geklikt
redButton.onclick = () => {
    
}
*/