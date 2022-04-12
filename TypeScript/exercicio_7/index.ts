class Conta {
    private agencia: string;
    private numConta: string;
    private saldo: number;

    constructor(agencia: string, numConta: string, saldo: number){
        this.agencia = agencia;
        this.numConta = numConta;
        this.saldo = saldo;
    }

    get getAgencia(): string{
        return this.agencia;
    }

    set setAgencia(agencia: string){
        this.agencia = agencia;
    }
    
    get getNumConta(): string{
        return this.numConta;
    }

    set setNumConta(numConta: string){
        this.numConta = numConta;
    }

    get getSaldo(): number{
        return this.saldo;
    }

    public depositar(valor: number){
        if (valor <= 0){
            console.log('Valor inválido!');
            return;
        }
        this.saldo += valor;
        console.log(`Depósito no valor de R$${valor} efetuado com sucesso!`);
        this.imprimirSaldo();
    }

    public sacar(valor: number){
        if (valor <= 0){
            console.log('Valor para saque inválido!');
            return;
        }
        if (valor > this.saldo){
            console.log(`Saque no valor de: R$${valor}. Saldo insuficiente!`);
            this.imprimirSaldo();
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} efetuado com sucesso!`);
        this.imprimirSaldo();
    }

    protected imprimirSaldo(){
        console.log('O saldo atual é: R$' + this.saldo);
    }
}

const conta = new Conta('1234', '987654', 500);
console.log('Agencia: ' + conta.getAgencia);
console.log('Conta: ' + conta.getNumConta);
console.log('Saldo: ' + conta.getSaldo);

conta.depositar(600);
conta.sacar(200);
conta.sacar(50);

export{};