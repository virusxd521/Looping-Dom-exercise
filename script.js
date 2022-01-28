// The parent element
const mainDiv = document.querySelector(".list");

// List of data 
const simpleGroceries = ["banana", "apple", "milk", "cereal", "eggs", "water", "soy-sauce"];

// assigning an element with data and styles
const assignment = (mainElement, mainData, styling) =>{
    mainElement.textContent = mainData;
    mainElement.classList.add(styling);
    return mainElement;
}

// creating elements function
const creating = (element, parent, data) => {
    const new_element = document.createElement(element);
    const readyChild = assignment(new_element, data, "item");
    parent.appendChild(readyChild);
}

// looping over everything
simpleGroceries.forEach(item => {
    creating("div", mainDiv, item );
})