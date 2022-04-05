var Conta = /** @class */ (function () {
    function Conta(age, numConta, saldo) {
        this.age = age;
        this.numConta = numConta;
        this.saldo = saldo;
    }
    return Conta;
}());
var hugo = new Conta("1234", "1234-0", 300);
console.log(hugo);
