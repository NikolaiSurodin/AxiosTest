class Employee {
    constructor(options) {
        this.name = options.name
        this.SurName = options.SurName
        this.age = options.age
        this.address = options.address
        this.position = options.position
        this.id = `f${(+new Date).toString(16)}`
        this.company_id = options.company_id
        this.department = options.department
        this.salary = options.salary
    }
}

export default Employee