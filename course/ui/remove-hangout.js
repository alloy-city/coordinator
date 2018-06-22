let hangouts = document.getElementById("coordinator-parcours-create-hangouts")

export default (button) => {
    hangouts.removeChild(hangouts.lastElementChild)

    Coordinator.Course.course.hangouts.pop()

    if (hangouts.children.length > 1)
        hangouts.lastElementChild.appendChild(button.parentNode)
}