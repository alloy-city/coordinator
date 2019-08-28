import { extractCourseFromForm } from './ui'

export default function (){
    // console.log("Create course.")

    let course = extractCourseFromForm()

    if (course) {
        Auth.database("POST", course, "course/", res => {
            console.log(res)
            Coordinator.Course.course._id = res
            Coordinator.Course.course.author = Auth.userData._id
            notify("Parcours dûment enregistré.", "success", false)
            Coordinator.Course.search()
            Coordinator.Course.edit(res)
        })
    }
}
