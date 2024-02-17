class Funcionario {
    constructor(public cargo: string) { }
}

class CalculadoraDeSalario {
    private static DESENVOLVEDOR = "DESENVOLVEDOR";
    private static DBA = "DBA";
    private static TESTER = "TESTER";

    private static dezOuVintePorcento(funcionario: Funcionario): number {
        // Implemente a lógica de cálculo para DESENVOLVEDOR aqui
        // Por exemplo, retornando 10% ou 20% do salário
        return 0;
    }

    private static quinzeOuVinteCincoPorcento(funcionario: Funcionario): number {
        // Implemente a lógica de cálculo para DBA e TESTER aqui
        // Por exemplo, retornando 15% ou 25% do salário
        return 0;
    }

    public static calcula(funcionario: Funcionario): number {
        if (CalculadoraDeSalario.DESENVOLVEDOR === funcionario.cargo) {
            return CalculadoraDeSalario.dezOuVintePorcento(funcionario);
        }
        if (
            CalculadoraDeSalario.DBA === funcionario.cargo ||
            CalculadoraDeSalario.TESTER === funcionario.cargo
        ) {
            return CalculadoraDeSalario.quinzeOuVinteCincoPorcento(funcionario);
        }
        throw new Error("Funcionário inválido");
    }
}
