// const myNum = [1, 2, 3];

// const sum = myNum.reduce((acc, curr) => {
//   console.log(`acc:${acc} and curr: ${curr}`);
//   return acc + curr;
// }, 0);

// console.log(sum);

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
