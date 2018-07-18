import { post } from '../http'

function removeStudent(course_id, student_id){
    console.log(course_id, student_id)

    post({course_id: course_id, student_id: student_id}, "course/remove-student", res => {
        console.log(res)
        if (res.ok){
            let studentElement = document.getElementById(`course-editor-enlisted-student-${student_id}`)
            let name = studentElement.firstChild.innerText
            notify(`Apprenant ${name} retiré du Parcours.`, "info", false)
            studentElement.remove()
        }
    })
}

export { removeStudent }