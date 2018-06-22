let titleElement = document.getElementById("create-group-title")
let descriptionElement = document.getElementById("coordinator-create-course-description")
let isHiddenElement = document.getElementById("coordinator-create-course-hidden")
let priceElement = document.getElementById("coordinator-create-course-price")
let levelElement = document.getElementById("create-group-level")
let themeElement = document.getElementById("create-group-theme")
let teacherElements = document.getElementsByClassName("create-group-teachers")
let hangoutsElement = document.getElementById("coordinator-parcours-create-hangouts")

export default () => {
    clearNotifications()

    let teachers = []
    for (let i = 0; i < teacherElements.length; i++) {
        if (teacherElements[i].checked) {
            teachers.push(teacherElements[i].value)
        }
    }
    
    let validationErrors = ""

    let hangouts = []
    for (let i = 0; i < hangoutsElement.children.length; i++) {
        hangouts[i] = new Date(document.getElementById(`create-group-date-${i + 1}`).value + "T" + document.getElementById(`create-group-time-${i + 1}`).value).valueOf()
        if (!hangouts[i]) {
            validationErrors += "Définissez les <b>dates</b> et <b>heures</b> de toutes les rencontres. "
            break
        }
    }
    
    if (titleElement.value == "") validationErrors += "Définissez un <b>titre</b>. "
    if (teachers.length == 0) validationErrors += "Définissez au moins un <b>enseignant</b>. "
    if (validationErrors.length > 0){
        notify(validationErrors, "danger", true)
        return null
    }

    Coordinator.Course.course.title = titleElement.value
    Coordinator.Course.course.description = descriptionElement.value
    Coordinator.Course.course.hidden = isHiddenElement.checked
    Coordinator.Course.course.price = Number(priceElement.value)
    Coordinator.Course.course.level = levelElement.selectedIndex
    Coordinator.Course.course.theme = themeElement.selectedIndex
    Coordinator.Course.course.teachers = teachers
    Coordinator.Course.course.hangouts = hangouts

    return Coordinator.Course.course
}