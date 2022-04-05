class Conta {
 age: string;
 numConta: string;
 private saldo: number;

 constructor(age: string, numConta: string, saldo: number){
    this.age = age;
    this.numConta = numConta;
    this.saldo = saldo;
    }
 } 
const hugo = new Conta ("1234", "1234-0", 300 );

console.log(hugo);



