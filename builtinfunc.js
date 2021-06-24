// const cars = ["BMW", "Toyota", "Tesla", "Porche", "Ferrari"]
// console.log(cars)

// const carsAfterSort = cars.sort()
// console.log("========SORT========")
// console.log(carsAfterSort)

// const carsSlice = cars.slice(0, 3)
// console.log("========SLICE========")
// console.log(carsSlice)


const number = [200, 5, 6, 1, 3, 20, 50]

const numberAfterSort = number.sort((k, b) => {
  return b - k
})

console.log(numberAfterSort)