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
}

const conta = new Conta('1234', '1234-5', 100);
console.log('Agencia: ' + conta.getAgencia);
console.log('Conta: ' + conta.getNumConta);
console.log('Saldo: ' + conta.getSaldo);


conta.setAgencia = '5678';
conta.setNumConta = '012345';
console.log('Nova Agencia: ' + conta.getAgencia);
console.log('Nova Conta: ' + conta.getNumConta);

export{};
