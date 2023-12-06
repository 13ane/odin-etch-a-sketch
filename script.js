body = document.getElementsByTagName(`body`);

container = document.getElementById(`container`);

genBtn = document.getElementById(`genBtn`);

genBtn.addEventListener(`click`, () => {x = parseInt(prompt(`X axis length`, `0`));
    while (container.lastChild) {container.lastChild.remove()};
    while (isNaN(x) || x > 100) {x = parseInt(prompt(`X axis length (Numbers <101 only)`, `0`))};
    arrayX = [...Array(x).keys()];
    y = parseInt(prompt(`Y axis length`, `0`));
    while (isNaN(y) || y > 100) {y = parseInt(prompt(`Y axis length (Number <101 only)`, `0`))};
    arrayY = [...Array(y).keys()];
    arrayX.forEach((element) => {
        blockX = document.createElement(`div`);
        container.appendChild(blockX);
        blockX.classList.add(`blockX`);
            arrayY.forEach(element => {
                blockY = document.createElement(`div`);
                blockX.appendChild(blockY);
                blockY.classList.add(`blockY`);
            });
    });
    blockArray = Array.from(document.getElementsByClassName(`blockY`));
    blockArray.forEach(element => { 
        element.addEventListener(`mouseover`,() => (colorChange(element, `#000000`)))
    });
});

let blockArray = Array.from(document.getElementsByClassName(`blockY`));

function colorChange (element, color) {
    element.style.backgroundColor = color;
};


