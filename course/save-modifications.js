import db from '../../auth/src/database'
import { extractCourseFromForm } from './ui'
import search from './search'

export default () => {

    let course = extractCourseFromForm()

    for (let i = 0; i < Coordinator.Course.course.students.length; i++){
        console.log(Coordinator.Course.course.students[i])
        course.students[i] = Coordinator.Course.course.students[i]._id
        // Coordinator.Course.course.students[i] = Coordinator.Course.course.students[i]._id
    }

    db("POST", course, `course/modify`, response => {
        console.log(response)
        notify("Parcours dûment modifié.", "success", false)
        search()
    })
}