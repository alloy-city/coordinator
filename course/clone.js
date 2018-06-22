import { extractCourseFromForm } from './ui'

let titleElement = document.getElementById("create-group-title")

export default function () {
    // console.log("Create course.")

    titleElement.value = `${titleElement.value} - ${string.commons.copy}`

    let course = extractCourseFromForm()

    if (course) {
        Auth.database("POST", course, "course/", res => {
            console.log(res)
            Coordinator.Course.course._id = res
            Coordinator.Course.course.author = Auth.userData._id
            notify("Copie du parcours dûment enregistré.", "success", false)
            Coordinator.Course.search()
        })
    }

}
