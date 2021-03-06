"use strict";
exports.__esModule = true;
var Conta = /** @class */ (function () {
    function Conta(agencia, numConta, saldo) {
        this.agencia = agencia;
        this.numConta = numConta;
        this.saldo = saldo;
    }
    Object.defineProperty(Conta.prototype, "getAgencia", {
        get: function () {
            return this.agencia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "setAgencia", {
        set: function (agencia) {
            this.agencia = agencia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "getNumConta", {
        get: function () {
            return this.numConta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "setNumConta", {
        set: function (numConta) {
            this.numConta = numConta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "getSaldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
var conta = new Conta('1234', '1234-5', 100);
console.log('Agencia: ' + conta.getAgencia);
console.log('Conta: ' + conta.getNumConta);
console.log('Saldo: ' + conta.getSaldo);
conta.setAgencia = '5678';
conta.setNumConta = '012345';
console.log('Nova Agencia: ' + conta.getAgencia);
console.log('Nova Conta: ' + conta.getNumConta);
