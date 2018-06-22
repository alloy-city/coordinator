let container = document.getElementById("coordinator-parcours-create-hangouts")

export default () => {
    // console.log("One hangout")

    container.innerHTML = ""
    Coordinator.Course.course.hangouts = [undefined]
    Coordinator.Course.Ui.drawHangouts(Coordinator.Course.course.hangouts)
}