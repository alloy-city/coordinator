export default function(id) {
    let group = Number(document.getElementById("enlistUser").value)

    if (group){
        console.log("enlistUser", id, group)

        $.ajax({
            type: 'post',
            url: "php/enlist.php",
            data: 'userId=' + id + '&groupId=' + group,
            success: function (res) {
                res = Number(JSON.parse(res))
                console.log(res);

                if (res == 3){
                    // 3 -> SUCCESS: user enlisted
                    showStudentDetails(id)
                    notify("User " + id + " enlisted in group " + group, "success", false)
                } else if (res == -1) {
                    // -1 -> Group does not exist
                    notify("ERROR: Group does not exist.", "danger", true)
                } else if (res == 1){
                    // 1 -> User already too busy
                    notify("WARNING: User already too busy.", "warning", true)
                } else if (res == 2){
                    // 2 -> No free slot in this group
                    notify("WARNING: No free slot in this group.", "warning", true)
                } else if (res == 0) {
                    // 0 -> User already enlisted in this group
                    notify("WARNING: User already enlisted in this group.", "warning", true)
                } else {
                    notify("ERROR: Something bad happened and I have no idea what it is :(", "danger", true)
                }
            }
        });
    }
}
