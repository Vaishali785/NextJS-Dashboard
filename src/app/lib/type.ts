export type Teacher = {
    id: number,
    teacherId: string,
    name: string,
    email?: string,
    photo: string,
    phone: string,
    subjects: string[],
    classes: string[],
    address: string,
}
export type Student = {
    id: number,
    studentId: string,
    name: string,
    email?: string,
    photo: string,
    phone?: string,
    grade: number,
    class: string,
    address: string,
}
export type Parent = {
    id: number,
    name: string,
    students: string[],
    phone?: string,
    email?: string,
    address: string,
}
export type Subject = {
    id: number,
    name: string,
    teachers: string[],
}
export type Class = {
    id: number,
    name: string,
    capacity: number,
    grade: number,
    supervisor: string,
}
export type Lesson = {
    id: number,
    subject: string,
    class: string,
    teacher: string,
}