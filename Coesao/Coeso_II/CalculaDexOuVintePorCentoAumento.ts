class CalculaDezOuVintePorCentoAumento implements IRegraDeCalculoSalarial {
    calculaAumento(funcionario: IFuncionario): number {
        if (funcionario.salarioBase > 3000.0) {
            return funcionario.salarioBase * 0.8;
        } else {
            return funcionario.salarioBase * 0.9;
        }
    }
}