"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let uuid = (0, uuid_1.v4)();
console.log(uuid);
function createUser({ name, age }) {
    let user = {
        name,
        age,
        id: (0, uuid_1.v4)(),
        cart: []
    };
    return user;
}
function createItem({ name, price, description }) {
    let item = {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description
    };
    return item;
}
function addToCart(user, item) {
    user.cart.push(item);
}
function removeFromCart(user, item) {
    for (let i = user.cart.length; i >= 0; i--) {
        if (user.cart[i] === item) {
            user.cart.splice(i, 1);
        }
    }
}
function removeQuantityFromCart(user, item, quantity) {
    while (quantity > 0) {
        user.cart.splice(user.cart.findIndex(i => i.name === item.name), 1);
        quantity--;
    }
}
function cartTotal(user) {
    let total = 0;
    for (let i in user.cart) {
        total += user.cart[i].price;
    }
    return total;
}
function printCart(user) {
    for (let i in user.cart) {
        console.log(user.cart[i]);
    }
}
let user = createUser({ name: 'Dillon', age: 32 });
let itemA = createItem({ name: 'shoe', price: 49.99, description: 'cool' });
let itemB = createItem({ name: 'hoodie', price: 59.99, description: 'warm' });
let itemC = createItem({ name: 'hat', price: 14.99, description: 'functional' });
addToCart(user, itemA);
printCart(user);
console.log(cartTotal(user));
console.log('=================================');
addToCart(user, itemB);
addToCart(user, itemB);
addToCart(user, itemB);
printCart(user);
console.log(cartTotal(user));
console.log('=================================');
addToCart(user, itemC);
addToCart(user, itemC);
addToCart(user, itemC);
printCart(user);
console.log(cartTotal(user));
console.log('=================================');
removeFromCart(user, itemB);
printCart(user);
console.log(cartTotal(user));
console.log('=================================');
removeQuantityFromCart(user, itemC, 2);
printCart(user);
console.log(cartTotal(user));
