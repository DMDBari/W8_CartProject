import { v4 as uuidv4 } from "uuid";

// Types

type Item = {
    id: string
    name: string
    price: number
    description: string
}

type User = {
    id: string
    name: string
    age: number
    cart: Item[]
}

function createUser({name, age}:{name:string, age:number}){
    let user: User={
        name,
        age,
        id:uuidv4(),
        cart:[]
    }
    return user
}

function createItem({name, price, description}:{name:string, price:number, description:string}){
    let item: Item={
        id:uuidv4(),
        name,
        price,
        description
    }
    return item
}

function addToCart(user:User, item:Item):void{
    user.cart.push(item)
}

function removeFromCart(user:User, item:Item):void{
    for (let i = user.cart.length; i >= 0; i--){
        if (user.cart[i] === item ){
            user.cart.splice(i, 1)
        }
    }
}

function removeQuantityFromCart(user:User, item:Item, quantity:number):void{
    while(quantity > 0){
        user.cart.splice(user.cart.findIndex(i => i.name === item.name) , 1)
        quantity--
    }
}

function cartTotal(user:User):number{
    let total = 0
    for (let i in user.cart){
        total += user.cart[i].price
    }
    return total
}

function printCart(user:User):void{
    for (let i in user.cart){
        console.log(user.cart[i])
    }
}

let user = createUser({name:'Dillon', age:32})
let itemA = createItem({name:'shoe', price:49.99, description:'cool'})
let itemB = createItem({name:'hoodie', price:59.99, description:'warm'})
let itemC = createItem({name:'hat', price: 14.99, description:'functional'})

addToCart(user, itemA)
printCart(user)
console.log(cartTotal(user))
console.log('=================================')

addToCart(user, itemB)
addToCart(user, itemB)
addToCart(user, itemB)
printCart(user)
console.log(cartTotal(user))
console.log('=================================')

addToCart(user,itemC)
addToCart(user,itemC)
addToCart(user,itemC)
printCart(user)
console.log(cartTotal(user))
console.log('=================================')

removeFromCart(user, itemB)
printCart(user)
console.log(cartTotal(user))
console.log('=================================')

removeQuantityFromCart(user, itemC, 2)
printCart(user)
console.log(cartTotal(user))