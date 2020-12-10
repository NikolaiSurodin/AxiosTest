class Employee {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.position = options.position
        this.id = `f${(+new Date).toString(16)}`
        this.company_id = options.company_id
    }
}

export default Employee