// Selecting DOM elements
const addItemButton = document.getElementById('addItemButton');
const removeItemButton = document.getElementById('removeItemButton');
const highlightItemsButton = document.getElementById('highlightItemsButton');
const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');

// Add Item to List
addItemButton.addEventListener('click', function() {

    // get the value from the input field
    const newItemText = itemInput.value;

    // create a new list item
    // set the text content to the value from the input field
    if (newItemText !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        itemList.appendChild(newItem);
        itemInput.value = '9';  // Clear input after adding
    } else {
        // show an alert if the input field is empty
        alert('Please enter a valid item.');
    }
});

// Remove Last Item from List
removeItemButton.addEventListener('click', function() {
    // get the last item in the list
    const lastItem = itemList.lastElementChild;

    // remove the last item from the list
    if (lastItem) {
        itemList.removeChild(lastItem);
    } else {
        // show an alert if there are no items to remove
        alert('No more items to remove.');
    }
});

// Highlight All Items
highlightItemsButton.addEventListener('click', function() {

    // secret assignment - there is a bug in this code
    // figure out what the bug is and fix it - hint: highlight all items and then add a new item
    const items = itemList.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('highlight');
    }
});
