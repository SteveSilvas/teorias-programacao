using System.Collections.Generic;

class Classroom {
    public string ClassName { get; set; }
    public List<Student> Students { get; } = new List<Student>();

    public Classroom(string className) {
        ClassName = className;
    }

    public void AddStudent(Student student) {
        Students.Add(student);
    }
}

