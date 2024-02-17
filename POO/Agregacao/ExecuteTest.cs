using System;

class Program {
    static void Main() {
        // Criando alguns objetos Student
        Student student1 = new Student("Alice", 101);
        Student student2 = new Student("Bob", 102);

        // Criando uma instância de Classroom e adicionando os alunos
        Classroom classroom = new Classroom("Class A");
        classroom.AddStudent(student1);
        classroom.AddStudent(student2);

        // A classe Classroom "agrega" os objetos Student
        Console.WriteLine($"Class: {classroom.ClassName}");
        Console.WriteLine("Students in the class:");
        foreach (var student in classroom.Students) {
            Console.WriteLine($"- {student.Name} (ID: {student.StudentID})");
        }
    }
}
