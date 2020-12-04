class Company {
    constructor(options) {
        this.id = `f${(+new Date).toString(16)}`
        this.name = options.name
        this.address = options.address
        this.about = options.about
    }
}

export default Company