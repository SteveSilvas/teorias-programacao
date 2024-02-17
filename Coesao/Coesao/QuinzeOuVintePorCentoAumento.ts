class QuinzeOuVinteCincoPorCento implements RegraDeCalculoSalarial {
    calculaAumento(funcionario: IFuncionario): number {
        if (funcionario.salarioBase > 2000.0) {
            return funcionario.salarioBase * 0.75;
        } else {
            return funcionario.salarioBase * 0.85;
        }
    }
}
