import drawHangouts from './draw-hangouts'

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
        studentsListElement.appendChild(htmlToElement(
            `<li class="list-group-item"><b>${course.students[i].nickname || course.students[i].name || ""}</b> - ${course.students[i].mainEmail}`
        ))
    }

    createButtonElement.classList = "hidden"
    cloneButtonElement.classList = "btn btn-default"
    removeButtonElement.classList = "btn btn-danger"
    modifyButtonElement.classList = "btn btn-warning"
}