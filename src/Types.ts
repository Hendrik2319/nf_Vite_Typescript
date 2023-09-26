
type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined

type Course = {
    name: string
    grades: Grade[]
}

type Student = {
    name: string
    lastName: string
    age: number
    certificate: Course[]
}

let studentList: Student[] = [
    {
        name: "Florian",
        lastName: "Weber",
        age: 14,
        certificate: [
            {
                name: "Sport",
                grades: ["A",1,undefined]
            },
            {
                name: "Kunst",
                grades: [3,2,4,5]
            },
            {
                name: "Mathe",
                grades: [1,2,"A"]
            },
        ]
    },
]

function courseToString( course:Course ): string {
    return course.name+": "+course.grades.map( n => n===undefined ? "*" : n ).join(",")
}

function printStudent( student:Student ): void {
    let line:String = student.name+" "+student.lastName+" ("+student.age+")"
    console.log(
        line+"\r\n"+
        "=".repeat(line.length)+"\r\n"+
        "Noten:\r\n"+student.certificate.map( courseToString ).join("\r\n")
    )
}

function printStudents( students:Student[] ): void {
    students.forEach( printStudent );
}

printStudents(studentList)
