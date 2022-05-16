class Hamburger{
    
    static SIZE_SMALL = {
        price: 100,
        callories: 150
    }

    static SIZE_BIG = {
        price: 150,
        callories: 250
    }


    static TOPPING_MAYO = {
        price: 50,
        callories: 300
    }

    static SIZE_TOMATO = {
        price: 50,
        callories: 50
    }

    constructor(size){
        this._size = size
        this._toppings = [];
    }

    addTopping(topping){
        this._toppings.push(topping);
    }

    removeTopping(topping){
       const index = this._toppings.indexOf(topping);

       this._toppings.splice(index, 1);
    }

    getCallories(){
        return this._toppings.reduce((acc, {callories}) => acc + callories, this._size.callories)
    }

    getToppingsCoun(){
        return this._toppings.length;
    }
}



// class Hamburger{
//     constructor({price, callories}){
//         this._price = price;
//         this._callories = callories;

//         this._toppingsCount = 0;
//     }

//     addTopping({price, callories}){
//         this._price +=price;
//         this._callories +=callories;
//         this._toppingsCount++;

//     }

//     removeTopping({price, callories}){
//         this._price -=price;
//         this._callories -=callories;
//         this._toppingsCount--;

//     }

//     getPrice(){
//         return this._price
//     }

//     getCallories(){
//         return this._callories
//     }
    
//     getToppingsCoun(){
//         return this._toppingsCount;
//     }
// }


