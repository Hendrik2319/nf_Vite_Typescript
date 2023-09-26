
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

function getGradeValue( grade:Grade ): number {
    if (typeof grade == "number")
        return grade;
    switch (grade) {
        case "A": return 1;
        case "B": return 2;
        case "C": return 3;
        case "D": return 4;
        case "E": return 5;
        case "F": return 6;
    }
    return 0;
}

function getCourseAverage( course:Course ): number {
    let filteredGrades = course.grades
        .filter(n => n !== undefined) // remove undefined grades
    if (filteredGrades.length===0)
        return 0;
    return filteredGrades
        .map( getGradeValue )
        .reduce( (n1,n2) => n1+n2, 0 )
        / filteredGrades.length
}

function getStudentAverage( student:Student ): number {
    let filteredAverages = student.certificate
        .map(getCourseAverage)
        .filter( n => n!==0) // remove every course with no grades or undefined grades only
    if (filteredAverages.length===0)
        return 0;
    return filteredAverages
        .reduce( (n1,n2) => n1+n2, 0 )
        / filteredAverages.length
}

function getStudentsAverage( studentList:Student[] ): number {
    let filteredAverages = studentList
        .map(getStudentAverage)
        .filter( n => n!==0) // remove every student with no grades or undefined grades only
    if (filteredAverages.length===0)
        return 0;
    return filteredAverages
        .reduce( (n1,n2) => n1+n2, 0 )
        / filteredAverages.length
}

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

console.log("Average over all: "+getStudentsAverage(studentList))
studentList.forEach( student => {
    console.log(
        "Average of "+student.name+" "+student.lastName+": "+getStudentAverage(student)+"\r\n"+
        student.certificate
            .map( couse => {
                return "   Average of course \""+couse.name+"\": "+getCourseAverage(couse)
            } )
            .join("\r\n")
    )
})
