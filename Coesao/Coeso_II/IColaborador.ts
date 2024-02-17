interface IColaborador {
    nome?: string;
    salarioBase: number;
    getSalarioBase(): number;
    Cargo: CargosEnum;
}