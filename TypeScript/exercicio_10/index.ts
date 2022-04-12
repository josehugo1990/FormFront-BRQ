interface Estudante {
    nome: string;
    readonly inscricao: string;
    email?: string;
    exibirDados: () => Omit<Estudante, 'exibirDados'>;
}

export{};