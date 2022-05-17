let message = {
    stocks:{
        T:200,
        ZHQ: 300,
        FV: 500
    }
};

let acoes = {}
let keys = Object.keys(message.stocks)
console.log(keys.length)

acoes[keys[0]] = {
    price: message.stocks[keys[0]]
}
console.log(acoes)

// acoes[keys[]] = {price: 200};
// console.log(stocks)

// let keys = Object.keys(stocks)

// let acoes = {}

// for (keys in stocks) {
//     acoes[keys].price = stocks[keys].price
// }