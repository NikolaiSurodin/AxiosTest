import Human from '/src/servces/Human'

class Developer extends Human {
}

let dev = []
let developer1 = new Developer({
    name: 'Kolya',
    age: 27,
    sex: 'man',
    program: true
},)
let developer2 = new Developer({
    name: 'lalala',
    age: 26,
    sex: 'woman',
    program: false
})
dev.push(developer1, developer2)
console.log(dev.sort((a, b) => {
    if (a.age < b.age) {
        return -1
    }
}))
export default Developer