using System;

// Classe base (superclasse)
class Animal
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Eat()
    {
        Console.WriteLine($"{Name} is eating.");
    }
}

// Classe derivada (subclasse)
class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine($"{Name} is barking.");
    }
}

class Program
{
    static void Main()
    {
        // Criando uma instância da classe derivada (Dog)
        Dog myDog = new Dog();
        myDog.Name = "Buddy";
        myDog.Age = 3;

        // Chamando métodos da classe base (Animal)
        myDog.Eat();

        // Chamando métodos da classe derivada (Dog)
        myDog.Bark();

        Console.ReadLine();
    }
}
