class Developer {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.lang = options.lang
        this.id = `f${(+new Date).toString(16)}`
    }
}

export default Developer