export default function() {
    clearDisplay();
    var search = $("#packs-eclass-search").val();
    var url = "http://" + serverIp + ":5014/api/eclass/search/" + search;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "data": {}
    }
    if (search.length > 0) {
        $.ajax(settings).done(function (array) {
            if (array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    packs.eclasses.display.push(array[i]);
                }
                addLessonsList(array);
            }
        });
    } else {
        // TODO get latest
    }
}