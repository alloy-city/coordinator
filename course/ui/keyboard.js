let searchBoxElement = document.getElementById("coordinator-course-search")

export default () => {
    searchBoxElement.addEventListener("keypress", (e) => {
        if (e.key == "Enter"){
            Coordinator.Course.search()
        }
    })
}