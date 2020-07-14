function renderFlowers(flowers) {
    const liElement = document.createElement('li');
    liElement.className = flowers.category;
    liElement.title = flowers.description;

    const h3Element = document.createElement('h3');
    h3Element.textContent = flowers.name;
    liElement.appendChild(h3Element);

    const imgElement = document.createElement('img');
    imgElement.src = '../assets/' + flowers.image;
    imgElement.alt = flowers.name;
    liElement.appendChild(imgElement);

    const pElement = document.createElement('p');
    pElement.className = 'price';

    const usd = '$' + flowers.price.toFixed(2);
    pElement.textContent = usd;

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Add';
    buttonElement.value = flowers.id;
    pElement.appendChild(buttonElement);

    liElement.appendChild(pElement);

    return liElement;
}

export default renderFlowers;