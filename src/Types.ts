
type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined

type Student = {
    name: string
    lastName: string
    age: number
    certificate: Grade[]
}

let studentList: Student[] = [
    {
        name: "Anton",
        lastName: "Meier",
        age: 16,
        certificate: [ 1,4,3,1,"A",undefined,1,2 ]
    },
    {
        name: "Berta",
        lastName: "Müller",
        age: 17,
        certificate: [ "A",undefined,1 ]
    },
    {
        name: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        certificate: [ "A",1,undefined,3,2,4,5 ]
    },
]

function printStudent( student:Student ): void {
    console.log(
        student.name+" "+student.lastName+" ("+student.age+")\r\n"+
        "=".repeat(30)+"\r\n"+
        "Noten: "+student.certificate.map( n => n===undefined ? "*" : n ).join(",")
    )
}

function printStudents( students:Student[] ): void {
    students.forEach( printStudent );
}

printStudents(studentList)
