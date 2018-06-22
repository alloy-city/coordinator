let resultsContainer = document.getElementById("coordinator-course-search-results")

export default (courses) => {
    console.log(`Add ${courses.length} courses to DOM.`)

    resultsContainer.innerHTML = ""

    for (let i=0; i<courses.length; i++){

        let listOfTeachers = ""
        for (let ii=0; ii<courses[i].teachers.length; ii++){
            listOfTeachers += `${courses[i].teachers[ii].nickname || courses[i].teachers[ii].name || courses[i].teachers[ii].mainEmail}<br/>`
        }

        resultsContainer.appendChild(htmlToElement(
            `<button type="button" class="list-group-item" onclick="Coordinator.Course.edit('${courses[i]._id}')" data-toggle="tooltip" data-placement="right" title="${listOfTeachers}">
                ${courses[i].title} - ${courses[i].description}
            </button>`
        ))
    }

    let tooltipTemplate = `
        <div class="tooltip tooltip-teacher-list" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner"></div>
        </div>`

    $('[data-toggle="tooltip"]').tooltip({ html: true, template: tooltipTemplate, trigger: "hover" })

}