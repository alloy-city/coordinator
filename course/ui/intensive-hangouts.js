let container = document.getElementById("coordinator-parcours-create-hangouts")

export default () => {
    // console.log("32 hangouts - intensive course")

    container.innerHTML = ""
    Coordinator.Course.course.hangouts = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined
    ]
    Coordinator.Course.Ui.drawHangouts(Coordinator.Course.course.hangouts)
    Coordinator.Course.intensiveAutofill()
}