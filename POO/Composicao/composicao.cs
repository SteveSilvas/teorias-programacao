using System;
using System.Collections.Generic;

// Classe representando um motor de carro (classe parte)
class Engine
{
    public void Start()
    {
        Console.WriteLine("Engine started.");
    }
}

// Classe representando um carro (classe todo)
class Car
{
    private Engine engine; // Composição: Carro "tem um" motor

    public Car()
    {
        engine = new Engine(); // Instância do motor criada dentro do construtor do carro
    }

    public void StartCar()
    {
        engine.Start(); // O carro inicia o motor
        Console.WriteLine("Car started.");
    }
}

class Program
{
    static void Main()
    {
        Car myCar = new Car();
        myCar.StartCar();

        // Quando o carro é destruído, o motor também é destruído
    }
}
