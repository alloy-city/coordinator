import { fillForm } from './ui'
import search from './search'

let formTitleElement = document.getElementById("coordinator-course-form-title")
let closeButton = document.getElementById("close-course-button")
let createButtonElement = document.getElementById("coordinator-parcours-create")
let cloneButtonElement = document.getElementById("coordinator-parcours-clone")
let modifyButtonElement = document.getElementById("coordinator-parcours-save-modifications")
let removeButtonElement = document.getElementById("coordinator-parcours-remove")

export default () => {
    search()

    Coordinator.Course.course._id = ""
    Coordinator.Course.course.author = ""
    Coordinator.Course.course.title = ""
    Coordinator.Course.course.description = ""
    Coordinator.Course.course.hidden = false
    Coordinator.Course.course.price = 209
    Coordinator.Course.course.level = 0
    Coordinator.Course.course.theme = 0
    Coordinator.Course.course.hangouts = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    Coordinator.Course.course.teachers = []
    Coordinator.Course.course.students = []

    fillForm(Coordinator.Course.course)
    formTitleElement.innerText = "Nouveau Parcours"
    closeButton.classList = "hidden"

    createButtonElement.classList = "btn btn-default"
    cloneButtonElement.classList = "hidden"
    removeButtonElement.classList = "hidden"
    modifyButtonElement.classList = "hidden"
}