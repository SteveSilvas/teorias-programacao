public class Main {
    public static void main(String[] args) {
        Animal myAnimal1 = new Dog(); // Uma instância de Dog como um Animal
        Animal myAnimal2 = new Cat(); // Uma instância de Cat como um Animal

        myAnimal1.MakeSound(); // Chama o método MakeSound da classe Dog
        myAnimal2.MakeSound(); // Chama o método MakeSound da classe Cat
    }
}
