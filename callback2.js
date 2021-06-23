const sayHello = (nama, cb) => {
  const hasil = `Hello ${nama}`
  return cb(hasil)
}

const result = sayHello("Iwan", (output) => {
  return output
})

console.log(result)