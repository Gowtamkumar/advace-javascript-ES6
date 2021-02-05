//akta object ar akta object ar  moddha user korer jonno bind user kora hoy

const NormalPerson = {
    firstName: 'Gowtam',
    lastName: 'Kumar',
    salary: 30000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
        
    }
}
const heroPerson = {
    firstName: 'Rahul',
    lastName: 'Kumar',
    salary: 40000,
}
//NormalPerson.chargeBill(3000);
//console.log(NormalPerson.salary);
const heroPersonChargeBill = NormalPerson.chargeBill.bind(heroPerson);
heroPersonChargeBill(500);
heroPersonChargeBill(500);
heroPersonChargeBill(2000);
console.log(heroPerson.salary);
