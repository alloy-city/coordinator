export default function (id){
    let code = Number(document.getElementById("giveDiscountCode").value)

    if (code){
        console.log("giveDiscountCode", id, code)

        $.ajax({
            type: 'post',
            url: "student/give-discount.php",
            data: {
                "id": id,
                "code": code
            },
            success: function (res) {
                res = JSON.parse(res)
                console.log(res)
            }
        })
    }
}