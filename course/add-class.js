let nOfHangouts = 8 // ??
export default function() {
    nOfHangouts++;
    var markUp = [
        '<div class="form-group">',
        '<label class="control-label col-sm-3" for="create-group-date-' + nOfHangouts + '">Hangout ' + nOfHangouts + '</label>',
        '<div class="col-sm-4">',
        '<input id="create-group-date-' + nOfHangouts + '" type="date" name="time">',
        '</div>',
        '<div class="col-sm-4">',
        '<input id="create-group-time-' + nOfHangouts + '" type="time" name="time">',
        '</div>',
        '</div>',
    ].join('');

    $('#create-group-time-' + (nOfHangouts - 1)).parent().parent().after(markUp);
}