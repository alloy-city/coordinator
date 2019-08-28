import hangoutsAutofill from './hangouts-autofill'
import intensiveAutofill from './intensive-autofill'
import create from './create'
import * as Ui from './ui'
import addClass from './add-class'
import search from './search'
import { Teacher, availableTeachers, assignedTeachers } from './teacher'
import edit from './edit'
import clone from './clone'
import saveModifications from './save-modifications'
import remove from './remove'
import close from './close'
import { enlist } from './enlist'

class Course {
    constructor() {
        this._id = "",
        this.author = "",
        this.title = "",
        this.description = "",
        this.hidden = false,
        this.price = 209,
        this.level = 0,
        this.theme = 0,
        this.hangouts = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        this.teachers = [],
        this.students = []
    }
}

let course = new Course()

hangoutsAutofill()
Teacher.initializeTeachers(Auth.teachers)

export {
    clone,
    course,
    create,
    Ui,
    addClass,
    search,
    hangoutsAutofill,
    intensiveAutofill,
    Teacher,
    edit,
    saveModifications,
    remove,
    close,
    enlist
}
