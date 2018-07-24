export default function (id) {
    $.ajax({
        type: 'get',
        url: "php/kill_debt.php",
        data: "user_id=" + id,
        success: function (results) {
            $('#debt-line-' + id).remove();
        }
    });
    return false;
}