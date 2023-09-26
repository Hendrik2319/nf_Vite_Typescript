// In dieser Aufgabenstellung geht es darum, den Typ "Student" in TypeScript zu definieren.
// Jeder Student soll über einen Vornamen, Nachnamen, Alter und eine Eigenschaft "Zeugnis" verfügen,
// die eine Liste von Noten enthält. In diesem ersten Schritt soll eine Note eine Ganzzahl von 1 bis 6 sein.
// Wählt geeignete englische Bezeichner für die Attribute.
// Anschließend soll ein Student erstellt und in der Konsole ausgegeben werden.

type Grade = 1 | 2 | 3 | 4 | 5 | 6

type Student = {
    name: string
    lastName: string
    age: number
    certificate: Grade[]
}

let student1: Student = {
    name: "Name1",
    lastName: "LastName1",
    age: 24,
    certificate: [ 1, 2, 2, 1, 6 ]
}

function printStudent( student:Student ): void {
    console.log(
        student.name+" "+student.lastName+" ("+student.age+")\r\n"+
        "=".repeat(30)+"\r\n"+
        "Noten: "+student.certificate.join(",")
    )
}

printStudent(student1)