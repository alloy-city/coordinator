import { availableTeachers } from '../teacher'

let container = document.getElementById("create-group-facilitator")

export default () => {
    
    let selected

    for (let i = 0; i < availableTeachers.length; i++){

        container.appendChild(htmlToElement(
            `<div class="checkbox">
                <label>
                    <input value="${availableTeachers[i]._id}" type="checkbox" class="create-group-teachers">
                    ${availableTeachers[i].nickname || availableTeachers[i].name} - ${availableTeachers[i].email}
                </label>
            </div>`
        ))

    }

}