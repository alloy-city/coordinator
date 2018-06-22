import db from "../../auth/src/database"
import { fillForm } from "./ui"

let formTitle = document.getElementById("coordinator-course-form-title")
let closeButton = document.getElementById("close-course-button")

export default id => {
    console.log(id)
    
    db("GET", null, `course/one/${id}`, result => {
        console.log(result)

        formTitle.innerText = "Modifier Parcours"

        Coordinator.Course.course._id = result._id
        Coordinator.Course.course.hangouts = result.hangouts
        Coordinator.Course.course.title = result.title
        Coordinator.Course.course.description = result.description
        Coordinator.Course.course.hidden = result.hidden
        Coordinator.Course.course.price = result.price
        Coordinator.Course.course.level = result.level
        Coordinator.Course.course.theme = result.theme
        Coordinator.Course.course.teachers = result.teachers
        Coordinator.Course.course.author = result.author
        Coordinator.Course.course.students = result.students

        fillForm(Coordinator.Course.course)
        closeButton.classList = "btn btn-default"
    })
}