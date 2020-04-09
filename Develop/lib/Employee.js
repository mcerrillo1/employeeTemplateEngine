//create constructor class for employee and export module

class Employee {
    constructor(name, id, email, office){
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }

    printInput(){
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
        console.log(`Office: ${this.office}`);
    }
}

module.exports = Employee;