const calc = {
  panambahan: function(n1, n2) {
    const hasil = n1 + n2
    return hasil

    // jika memakai function biasah
    // this.pengurangan(hasil, 5)

    // jika memakai arrow function
    // calc.pengurangan(hasil, 5)
  },
  pengurangan: function(n1, n2) {
    const hasil = n1 - n2
    return hasil
  },
  getList: () => {
    const penambahan = calc.panambahan(1,2)
    const pengurangan = calc.pengurangan(1,2)
    const hasil = `penambahan ${penambahan}, pengurangan ${pengurangan}`
    return hasil
  }
}

console.log(calc.getList())
// console.log(calc.panambahan(10, 5))