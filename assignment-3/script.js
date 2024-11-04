// Sla de buttons in variabelen op.
const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('?');
const blueButton = document.getElementById('?');

// sla de tekst op in een variabele.
const text1 = document.getElementById('text1');

redButton.onclick = () => {ChangeColor(text1, 'red')};
// greenButton.onclick = () => { ? };
// blueButton.onclick = () => { ? };

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