const cars = ["BMW", "Toyota", "Tesla", "Porche", "BMW", "Toyota", "Tesla", "Porche", "Ferrari", "Ferrari", "BMW", "Toyota", "Tesla", "Porche", "Ferrari"]

const carsAfterFilter = cars.find((e, i) => {
  if(e.includes("o")){ // e.includes("o") === true
    return e
  }
})

console.log(carsAfterFilter)