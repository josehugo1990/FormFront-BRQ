"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ContaPF = /** @class */ (function (_super) {
    __extends(ContaPF, _super);
    function ContaPF(agencia, numConta, saldo, cpf) {
        var _this = _super.call(this, agencia, numConta, saldo) || this;
        _this.cpf = cpf;
        return _this;
    }
    Object.defineProperty(ContaPF.prototype, "setCpf", {
        set: function (cpf) {
            this.cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaPF.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    ContaPF.prototype.imprimirSaldo = function () {
        console.log('O saldo atual pessoa física é: R$' + this.getSaldo);
    };
    ContaPF.prototype.incluirPacoteServicoDigital = function () {
        console.log('Pacote incluído na conta do cliente!');
    };
    return ContaPF;
}(Conta));
var contaPF = new ContaPF('1235', '1234567-8', 150, '147.258.369.54');
contaPF.incluirPacoteServicoDigital();
