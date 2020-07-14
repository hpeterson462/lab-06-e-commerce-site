import flowers from '../data/flowers.js';
import renderFlowers from './render-flowers.js';

const list = document.getElementById('flowers');

for (let i = 0; i < flowers.length; i++) {
    const flowersItem = flowers[i];
    const element = renderFlowers(flowersItem);
    list.appendChild(element);
}