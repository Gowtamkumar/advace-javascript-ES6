//akta object ar akta object ar  moddha user korer jonno bind user kora hoy

const NormalPerson = {
    firstName: 'Gowtam',
    lastName: 'Kumar',
    salary: 30000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount -tips -tax;
        return this.salary;
        
    }
}
const heroPerson = {
    firstName: 'Rahul',
    lastName: 'Kumar',
    salary: 40000,
}
const callPerson = {
    firstName: 'Rahul',
    lastName: 'Kumar',
    salary: 40000,
}


//same work by call bind then short 
NormalPerson.chargeBill.call(callPerson, 500, 500, 50)
console.log(callPerson.salary);
