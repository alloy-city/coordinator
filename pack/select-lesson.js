export default function(id, title) {
    packs.packs.selected.content.push(id);
    var pcd = $('#pack-content-display').html();
    $('#pack-content-display ul').append('<li>' + title + '</li>');
}