import Developer from '/src/servces/Developer'

class BackendDev extends Developer {

    constructor(options) {
        super(options)
        this.lang = options.lang
    }
}
let backDev = []
let backDev1 = new BackendDev({
    name: 'Peter',
    age: 52,
    sex: 'man',
    program: true,
    lang: 'C++'
})
let backDev2 = new BackendDev({
    name: 'Masha',
    age: 29,
    program: true,
    lang:'Python'
})
backDev.push(backDev1, backDev2)
console.log(backDev.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    }
}))



export default BackendDev