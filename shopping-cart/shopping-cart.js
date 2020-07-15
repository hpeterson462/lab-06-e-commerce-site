import cart from '../data/cart.js';
import flowers from '../data/flowers.js';
import { findById, calcOrderTotal, toUSD } from '../common/utilis-.js';
import renderCartItem from './render-line-item.js';

const tbodyEl = document.querySelector('tbody');