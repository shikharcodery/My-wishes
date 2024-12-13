const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-button');
const shoppingList = document.getElementById('shopping-list');
const feedback = document.getElementById('feedback');
const listArr = [];


function checkDuplicate(item) {
    return listArr.includes(item.toLowerCase());
}

// Function to render the list
function renderList() {
    shoppingList.innerHTML = '';
    listArr.forEach((gift, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = gift;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => removeItem(index);
        listItem.appendChild(deleteButton);
        shoppingList.appendChild(listItem);
    });
    itemInput.value = ''; // Clear the input field
}

// Function to add an item
function addItem() {
    const itemText = itemInput.value.trim();
    if (!itemText) return; // Do nothing if input is empty
    if (checkDuplicate(itemText)) {
        feedback.classList.remove('hidden');
        setTimeout(() => feedback.classList.add('hidden'), 2000);
        return;
    }
    listArr.push(itemText.toLowerCase());
    renderList();
}

// Function to remove an item
function removeItem(index) {
    listArr.splice(index, 1);
    renderList();
}

// Event listeners
addItemButton.addEventListener('click', addItem);
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});
