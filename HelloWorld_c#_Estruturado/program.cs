using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What is your name?");
            var name = Console.ReadLine();

            Console.WriteLine("What is your year of birth?");
            var yearOfBirth = int.Parse(Console.ReadLine());

            var currentDate = DateTime.Now;
            var age = currentDate.Year - yearOfBirth;

            Console.WriteLine(
                $"{Environment.NewLine}Hello, {name}, on {currentDate:d} at {currentDate:t}!"
            );

            Console.WriteLine(
                $"{Environment.NewLine}You are {age} years old."
            );

            Console.Write($"{Environment.NewLine}Press any key to exit...");
            Console.ReadKey(true);
        }
    }
}
