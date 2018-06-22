import { post } from '../http'

function giveXP(){
    let xp = Number(document.getElementById("students-give-xp").value)
    let student = Teacher.Student.selected._id

    console.log(xp, student)

    if (xp > 0){
        post({ user_id: student, xp: xp }, `xp/give-xp`, res => {
            
            /// #if DEBUG
            console.log(res)
            /// #endif
    
            if (xp == 1)
                notify(`1 XP donné à ${Teacher.Student.selected.email}`, "success", false)
            else {
                notify(`${xp} XPs donnés à ${Teacher.Student.selected.email}`, "success", false)
            }
        })
    } else if (xp == 0) {
        notify(`Choisissez le nombre de points.`, "warning", true)
    } else {
        notify(`Vous voulez enlever des points ?? Pas sympas ...`, "warning", true)
    }
}

export { giveXP }