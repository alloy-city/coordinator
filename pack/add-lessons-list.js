export default function(arr) {
    var markUp = '<table class="table table-striped"><tr><th>lang</th><th>titre</th><th>sous-titre</th></tr>'
    for (var i = 0; i < arr.length; i++) {
        var langColor = 'info' // fr
        if (arr[i].language == 'en') langColor = 'danger';
        else if (arr[i].language == 'pt') langColor = 'success';
        var tags = '';
        if (arr[i].tags) {
            for (var ii = 0; ii < arr[i].tags.length; ii++) {
                tags = tags + '<span class="label label-default pull-right">' + arr[i].tags[ii] + '</span>';
            }
        }
        markUp = markUp + '<tr class="' + langColor + '" onclick="selectEclassForPack(\'' + arr[i]._id + '\', \'' + arr[i].title + '\')"><td>' + arr[i].language + '</td><td>' + arr[i].title + tags + '</td><td>' + arr[i].subtitle + '</td></tr>';
    }
    markUp = markUp + '</table>';
    $('#packs-display-eclass').append(markUp);
}