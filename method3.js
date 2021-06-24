// ada di file berbeda
const data = {
  name: "Iwan",
  hobby: "Makan",
}

const dataTambahan = {
  lastName: "Aji"
}

const obj = {
  getName: (payload, payload2) => {
    return payload.name+" "+payload2.lastName
  },
  getHobby: (payload) => {
    return payload.hobby
  },
  getData: (data1, data2) => {
    const name = obj.getName(data1,)
    const hobby = obj.getHobby(data1)
    return `${name} & ${hobby}`
  }
}

// console.log(obj.getName(data))
// console.log(obj.getHobby(data))
console.log(obj.getData(data, dataTambahan))
