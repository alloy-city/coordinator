import { post } from '../http'

function enlist(user_id, course_id){
    /// #if DEBUG
    console.log(user_id, course_id)
    /// #endif
    
    post({ user_id: user_id, course_id: course_id }, "course/enlist", res => {
        /// #if DEBUG
        console.log(res)
        /// #endif

        notify("Apprenant inscrit", "success", false)
    })
}

export { enlist }