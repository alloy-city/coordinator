export default () => {
    // console.log("Double hangouts")

    let x = Coordinator.Course.course.hangouts.length

    for (let i = 0; i < x; i++){
        Coordinator.Course.Ui.addHangout()
    }
}