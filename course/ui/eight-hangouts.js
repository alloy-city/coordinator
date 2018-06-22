let container = document.getElementById("coordinator-parcours-create-hangouts")

export default () => {
    // console.log("Eight hangout")

    container.innerHTML = ""
    Coordinator.Course.course.hangouts = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    Coordinator.Course.Ui.drawHangouts(Coordinator.Course.course.hangouts)
    Coordinator.Course.hangoutsAutofill()
}