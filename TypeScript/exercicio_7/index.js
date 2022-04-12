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
    Conta.prototype.depositar = function (valor) {
        if (valor <= 0) {
            console.log('Valor inválido!');
            return;
        }
        this.saldo += valor;
        console.log("Dep\u00F3sito no valor de R$".concat(valor, " efetuado com sucesso!"));
        this.imprimirSaldo();
    };
    Conta.prototype.sacar = function (valor) {
        if (valor <= 0) {
            console.log('Valor para saque inválido!');
            return;
        }
        if (valor > this.saldo) {
            console.log("Saque no valor de: R$".concat(valor, ". Saldo insuficiente!"));
            this.imprimirSaldo();
            return;
        }
        this.saldo -= valor;
        console.log("Saque de R$".concat(valor, " efetuado com sucesso!"));
        this.imprimirSaldo();
    };
    Conta.prototype.imprimirSaldo = function () {
        console.log('O saldo atual é: R$' + this.saldo);
    };
    return Conta;
}());
var conta = new Conta('1234', '987654', 500);
console.log('Agencia: ' + conta.getAgencia);
console.log('Conta: ' + conta.getNumConta);
console.log('Saldo: ' + conta.getSaldo);
conta.depositar(600);
conta.sacar(200);
conta.sacar(50);
