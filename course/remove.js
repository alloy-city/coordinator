import db from '../../auth/src/database'
import close from './close'

let formTitleElement = document.getElementById("coordinator-course-form-title")

export default () => {

    let confirmed = confirm("Savez-vous ce que vous faites là ?");

    if (confirmed){
        db("delete", null, `course/${Coordinator.Course.course._id}`, response => {
            console.log(response)
            notify("Parcours supprimé. À jamais. On y peut plus rien.", "danger", true)
            close()
        })
    }
}