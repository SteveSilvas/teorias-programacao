using System;
class Student
{
    public string Name { get; set; }
    public int StudentID { get; set; }

    public Student(string name, int studentID)
    {
        Name = name;
        StudentID = studentID;
    }
}
