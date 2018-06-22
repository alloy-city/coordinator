/*
    @in: array of times
    @out: display on form
*/

let hangoutsContainer = document.getElementById("coordinator-parcours-create-hangouts")

export default (hangouts) => {
    // console.log("Draw hangouts")

    hangoutsContainer.innerHTML = ""

    for (let i=0; i<hangouts.length; i++){
        let removeButton = ""
        if (i == hangouts.length - 1 && hangouts.length > 1) removeButton = `
            <div class="col-sm-1">
                <button class="btn btn-default" type="button" onclick="Coordinator.Course.Ui.removeHangout(this)">-</button>
            </div>`

        let date = ""
        let time = ""
        if (hangouts[i]){
            date = moment(hangouts[i]).format(moment.HTML5_FMT.DATE)
            time = moment(hangouts[i]).format(moment.HTML5_FMT.TIME)
        }

        hangoutsContainer.appendChild(htmlToElement(`
            <div class="form-group">
                <label class="control-label col-sm-3" for="create-group-date-${i+1}">Rencontre ${i+1}</label>
                <div class="col-sm-4">
                    <input id="create-group-date-${i + 1}" class="form-control" type="date" name="time" value="${ date }">
                </div>
                <div class="col-sm-4">
                    <input id="create-group-time-${i + 1}" class="form-control" type="time" name="time" value="${ time }">
                </div>
                ${removeButton}
            </div>
        `))
    }
}