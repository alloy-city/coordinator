import { post } from '../http'

function enlist(user_id, course_id){
    /// #if DEBUG
    console.log(user_id, course_id)
    /// #endif
    
    post({ user_id: user_id, course_id: course_id }, "course/enlist", res => {
        /// #if DEBUG
        console.log(res)
        /// #endif

        if (res == 0) {
            notify("Apprenant était déjà inscrit à ce Cours.", "info", false)
        } else {
            notify("Apprenant inscrit", "success", false)
        }
    })
}

export { enlist }