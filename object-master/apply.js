const NormalPerson = {
    firstName: "Korim",
    lastName: "hassan",
    salary: 25000,
    fullName: function () {
        console.log(this.firstName, this.lastName);
    },
    billCharge: function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
applyPerson = {
    firstName: "rohim",
    lastName: "hasan",
    salary: 20000
}

NormalPerson.billCharge.apply(applyPerson, [500, 50, 5]);
console.log(applyPerson.salary)