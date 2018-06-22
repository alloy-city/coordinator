export default function(id, slot) {
    if (id && slot) {
        console.log("freeUserSlot", id, slot)

        $.ajax({
            type: 'post',
            url: "php/free-user-slot.php",
            data: 'id=' + id + '&slot=' + slot,
            success: function (res) {
                res = JSON.parse(res)
                console.log(res);
                if (res == 0){
                    showStudentDetails(id)
                    notify("User slot is now free.", "success", false)
                } else {
                    notify("ERROR: Something bad happened and I have no idea what it is :(", "warning", true)
                }
            }
        });
    }
}