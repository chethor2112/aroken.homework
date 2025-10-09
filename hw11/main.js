
const user = {
  name: 'Rostislav',
  age: 21,
  job: 'web-dev',
  city: 'Kamyshin'
}

console.log('Hello ' + user.name)

const usersMas = [
  {
    name: 'gleb',
    age: 30,
    job: 'waiter',
    isAdmin: false
  },
  {
    name: 'oleg',
    age: 45,
    job: 'bisnesmen',
    isAdmin: true
  },
  {
    name: 'artem',
    age: 25,
    job: 'courier',
    isAdmin: false

  },
  {
    name: 'mariya',
    age: 28,
    job: 'mother',
    isAdmin: true
  }
]

let simpleUser = null

for (let i = 0; i < usersMas.length; i++) {
  if (usersMas[i].isAdmin == false) {
    simpleUser++
  }
}
console.log(simpleUser + ' пользователя не администратора')
