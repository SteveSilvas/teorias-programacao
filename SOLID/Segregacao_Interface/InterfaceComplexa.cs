public interface IPessoa
{
    void Trabalhar();
    void Comer();
    void Dormir();
    void Estudar();
}

public class Programador : IPessoa
{
    public void Trabalhar()
    {
        // Implementação do trabalho de um programador
    }

    public void Comer()
    {
        // Implementação da pausa para comer
    }

    public void Dormir()
    {
        // Implementação da pausa para dormir
    }
        public void Estudar()
    {
        // Implementação da pausa para estudar
    }
}

public class Estudante : IPessoa
{
    public void Trabalhar()
    {
        // Implementação do trabalho de um estudante (pode ser vazio, já que estudantes podem não trabalhar)
    }

    public void Comer()
    {
        // Implementação da pausa para comer
    }

    public void Dormir()
    {
        // Implementação da pausa para dormir
    }

    public void Estudar()
    {
        // Implementação da pausa para estudar
    }
}
