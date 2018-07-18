import drawHangouts from './draw-hangouts'
import { removeStudent } from '../removeStudent'

let titleElement = document.getElementById("create-group-title")
let descriptionElement = document.getElementById("coordinator-create-course-description")
let isHiddenElement = document.getElementById("coordinator-create-course-hidden")
let priceElement = document.getElementById("coordinator-create-course-price")
let levelElement = document.getElementById("create-group-level")
let themeElement = document.getElementById("create-group-theme")
let teacherElements = document.getElementsByClassName("create-group-teachers")
let studentsListElement = document.getElementById("coordinator-parcours-create-students")
let createButtonElement = document.getElementById("coordinator-parcours-create")
let cloneButtonElement = document.getElementById("coordinator-parcours-clone")
let modifyButtonElement = document.getElementById("coordinator-parcours-save-modifications")
let removeButtonElement = document.getElementById("coordinator-parcours-remove")

export default course => {
    console.log(course)

    titleElement.value = course.title
    descriptionElement.value = course.description
    isHiddenElement.checked = course.hidden
    priceElement.value = course.price
    levelElement.value = course.level
    themeElement.value = course.theme

    for (let i = 0; i < teacherElements.length; i++) {
        teacherElements[i].checked = false
    }

    for (let i = 0; i < course.teachers.length; i++){
        for (let ii = 0; ii < teacherElements.length; ii++){
            if (teacherElements[ii].value == course.teachers[i]){
                teacherElements[ii].checked = true
            }
        }
    }

    drawHangouts(course.hangouts)

    studentsListElement.innerHTML = ""
    for (let i=0; i<course.students.length; i++){
        let studentElement = htmlToElement(
            `<li id="course-editor-enlisted-student-${course.students[i]._id}" class="list-group-item" role="button"><b>${course.students[i].nickname || course.students[i].name || ""}</b> - ${course.students[i].mainEmail}</li>`
        )

        let removeStudentButton = htmlToElement(`<span class="pull-right glyphicon glyphicon-remove" aria-hidden="true" role="button"></span>`)
        removeStudentButton.addEventListener("click", e => {
            e.stopPropagation()
            removeStudent(course._id, course.students[i]._id)
        })

        studentElement.addEventListener("click", () => {
            console.log(`Open student ${course.students[i]._id}'s detail.`)
        })

        studentElement.appendChild(removeStudentButton)
        studentsListElement.appendChild(studentElement)
    }

    createButtonElement.classList = "hidden"
    cloneButtonElement.classList = "btn btn-default"
    removeButtonElement.classList = "btn btn-danger"
    modifyButtonElement.classList = "btn btn-warning"
}