const data = [{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  }
}]

const controller = {
  getDetail: (data) => {
    const hasil = data[0]
    return hasil
  },
  getNama: (data) => {
    const detail = controller.getDetail(data)
    return detail.name
  }
}

// console.log(controller.getDetail(data))
console.log(controller.getNama(data))