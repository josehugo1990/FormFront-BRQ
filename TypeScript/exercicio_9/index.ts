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

interface IContaDigital {
    incluirPacoteServicoDigital: () => void;
}

class ContaPF extends Conta implements IContaDigital{
    private cpf: string;

    constructor(agencia: string, numConta: string, saldo: number, cpf: string){
        super(agencia, numConta, saldo);
        this.cpf = cpf
    }

    set setCpf(cpf: string){
        this.cpf = cpf;
    }
    get getCpf(){
        return this.cpf;
    }

    protected imprimirSaldo(){
        console.log('O saldo atual pessoa física é: R$' + this.getSaldo);
    }

    incluirPacoteServicoDigital(){
        console.log('Pacote incluído na conta do cliente!');
    }
}

const contaPF = new ContaPF('1235', '1234567-8', 150, '147.258.369.54');
contaPF.incluirPacoteServicoDigital();

export{};