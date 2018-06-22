export default function() {
    $('#packs-display-results').html('');
    packs.packs.display = {};

    var url = "http://" + serverIp + ":5014/api/pack/";
    $.getJSON(url, function (array) {
        console.log(array);
        addPacks(array);
    });
}