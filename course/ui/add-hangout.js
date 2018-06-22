let hangouts = document.getElementById("coordinator-parcours-create-hangouts")

export default () => {
    // console.log("Add hangout")

    if (Coordinator.Course.course.hangouts.length > 1)
        hangouts.lastElementChild.removeChild(hangouts.lastElementChild.lastElementChild)

    Coordinator.Course.course.hangouts.push(undefined)

    hangouts.appendChild(htmlToElement(`
            <div class="form-group">
                <label class="control-label col-sm-3" for="create-group-date-8">Rencontre ${Coordinator.Course.course.hangouts.length}</label>
                <div class="col-sm-4">
                    <input id="create-group-date-${Coordinator.Course.course.hangouts.length}" class="form-control" type="date" name="time">
                </div>
                <div class="col-sm-4">
                    <input id="create-group-time-${Coordinator.Course.course.hangouts.length}" class="form-control" type="time" name="time">
                </div>
                <div class="col-sm-1">
                    <button class="btn btn-default" type="button" onclick="Coordinator.Course.Ui.removeHangout(this)">-</button>
                </div>
            </div>
        `))
}