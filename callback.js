const sayHello = (nama, cb1, cb2) => {
  let output = `Hello ${nama}`
  return cb1(output, cb2)
}

const result = (hasil, cb2) => {
  let data = "Test "+hasil
  return cb2(data)
}

const hasil = (data) => {
  return data+" Test2"
}

let nama = "Udin"
console.log( sayHello( nama, result, hasil ) )
