import Developer from '/src/servces/Developer'

class FrontDev extends Developer {
    constructor(options) {
        super(options)
        this.lang = options.lang
    }

    work() {
        console.log()
    }

    get ageInfo() {
        return `${this.age}  age ${this.name} `
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
}

let frontends = []
let frontDev1 = new FrontDev({
    name: 'Vasy',
    age: 32,
    sex: 'man',
    program: true,
    lang: 'javaScript'
})
let frontDev2 = new FrontDev({
    name: 'Alesha',
    age: 22,
    program: true
})
frontends.push(frontDev1, frontDev2)
console.log(frontends.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    }
}))
console.log(frontDev2.ageInfo)


export default FrontDev