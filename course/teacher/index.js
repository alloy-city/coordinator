// @in: array of teacher objects from DB
// @out: two arrays of teacher objects instantiated from the Teacher class.

import { teacherList } from "../ui"

class Teacher {
    constructor(name, nickname, email, _id){
        this.name = name
        this.nickname = nickname
        this.email = email
        this._id = _id
    }

    static initializeTeachers(t){
        for (let i=0; i<t.length; i++){
            let avT = new Teacher(t[i].name, t[i].nickname, t[i].mainEmail, t[i]._id)
            availableTeachers.push(avT)
        }

        teacherList()
    }

    static assigneTeacher(index){
        assignedTeachers.push(availableTeachers[index])
        availableTeachers.splice(index, 1)
    }

    static unassigneTeacher(index) {
        availableTeachers.push(assignedTeachers[index])
        assignedTeachers.splice(index, 1)
    }
}

let availableTeachers = []
let assignedTeachers = []

export {
    Teacher,
    availableTeachers,
    assignedTeachers
}