const products = [
  {
    name: "Kopi Hitam",
    price: 12000
  },
  {
    name: "Kopi Susu",
    price: 15000
  },
  {
    name: "Kopi Arabica",
    price: 8000
  }
]

// console.log(products)

const prd = products.map((e, i) => {
  return `${e.name} ${i}`
})

console.log(prd)