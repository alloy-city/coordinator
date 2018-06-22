export default () => {
    // console.log("intensiveAutofill()")

    $('#create-group-time-1').keyup(function () {

        if (this.value != '' && $('#create-group-date-1')[0].value != '') {
            let hangouts = []

            hangouts[0] = moment($('#create-group-date-1')[0].value + 'T' + this.value).parseZone()
            
            for (let i = 1; i<32; i++){
                hangouts[i] = hangouts[i - 1].clone()

                if (i%2 == 0){
                    hangouts[i].add(1, "d").subtract(50, "minutes")
                } else {
                    hangouts[i].add(50, "minutes")
                }

                if (hangouts[i].day() == 5){
                    hangouts[i].add(3, "d");
                }
            }

            for (let i=0; i<32; i++){
                $('#create-group-date-' + (i + 1))[0].value = hangouts[i].format('YYYY-MM-DD')
                $('#create-group-time-' + (i + 1))[0].value = hangouts[i].format('HH:mm')
            }
            
        }
    });
}