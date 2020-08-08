const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.getElementsByClassName('entry-textbox');

function addEntryToDom(event) {
    event.preventDefault();
    // console.log(entryTextbox[0].value);
    var entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox[0].value;
    entryDiv.style.display = 'none';

    entriesSection.appendChild(entryDiv);
    // console.log(entryTextbox[0].value);
}

entryForm.addEventListener('submit', addEntryToDom)