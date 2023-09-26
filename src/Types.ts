
type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined

type Student = {
    name: string
    lastName: string
    age: number
    certificate: Grade[]
}

let student1: Student = {
    name: "Anton",
    lastName: "Meier",
    age: 17,
    certificate: [ "A",2,undefined,3,1,"B",undefined,5 ]
}

function printStudent( student:Student ): void {
    console.log(
        student.name+" "+student.lastName+" ("+student.age+")\r\n"+
        "=".repeat(30)+"\r\n"+
        "Noten: "+student.certificate.map( n => n===undefined ? "*" : n ).join(",")
    )
}

printStudent(student1)