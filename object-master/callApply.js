const NormalPerson ={
    firstName:'Gowtam',
    lastName:'Kumar',
    salary:30000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount){
        this.salary = this.salary -amount;
    }
}
NormalPerson.chargeBill(5000);
NormalPerson.chargeBill(500);
console.log(NormalPerson.salary);