public interface ITrabalhador
{
    void Trabalhar();
}
public interface IEstudante
{
       void Estudar();
}
public interface IPessoa
{
    void Comer();
    void Dormir();
}

public class Programador : ITrabalhador, IPessoa
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
}

public class Estudante : IEstudante,IPessoa
{
    public void Estudar()
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
}
