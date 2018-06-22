export default function(arr) {
    let markUp = '<table class="table table-striped"><tr><th>titre</th><th>sous-titre</th><th>prix</th><th>xp min.</th></tr>'
    for (let i = 0; i < arr.length; i++) {
        packs.packs.display[arr[i]._id] = arr[i];

        markUp = markUp + '<tr onclick="Coordinator.Packs.selectPack(\'' + arr[i]._id + '\')"><td>' + arr[i].title + '</td><td>' + arr[i].subtitle + '</td><td>' + arr[i].price + '</td><td>' + arr[i].xpRequirement + '</td></tr>';
    }
    markUp = markUp + '</table>';
    $('#packs-display-results').append(markUp);
}