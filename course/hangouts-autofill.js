export default () => {
    // console.log("IIFE: hangoutsAutofill()")

    $('#create-group-time-1').keyup(function () {
    
        if (this.value != '' && $('#create-group-date-1')[0].value != '') {
            var hangout1 = moment($('#create-group-date-1')[0].value + ' ' + this.value);
    
            // Monday and Tuesday
            if (hangout1.day() == 1 || hangout1.day() == 2) {
                // console.log(hangout1.day());
                for (var i = 0; i < 7; i++) {
                    if (i % 2 == 0) {
                        $('#create-group-date-' + (i + 2))[0].value = hangout1.add(2, 'd').format('YYYY-MM-DD');
                        $('#create-group-time-' + (i + 2))[0].value = hangout1.format('HH:mm');
                    } else {
                        $('#create-group-date-' + (i + 2))[0].value = hangout1.add(5, 'd').format('YYYY-MM-DD');
                        $('#create-group-time-' + (i + 2))[0].value = hangout1.format('HH:mm');
                    }
                }
            }
    
            // Wednesday and Thurdays
            else if (hangout1.day() == 3 || hangout1.day() == 4) {
                for (var ii = 0; ii < 7; ii++) {
                    if (ii % 2 == 0) {
                        $('#create-group-date-' + (ii + 2))[0].value = hangout1.add(5, 'd').format('YYYY-MM-DD');
                        $('#create-group-time-' + (ii + 2))[0].value = hangout1.format('HH:mm');
                    } else {
                        $('#create-group-date-' + (ii + 2))[0].value = hangout1.add(2, 'd').format('YYYY-MM-DD');
                        $('#create-group-time-' + (ii + 2))[0].value = hangout1.format('HH:mm');
                    }
                }
            }
    
            else if (hangout1.day() == 5 || hangout1.day() == 6) {
                for (var iii = 0; iii < 7; iii++) {
                    if (iii % 2 == 0) {
                        $('#create-group-date-' + (iii + 2))[0].value = hangout1.format('YYYY-MM-DD');
                        $('#create-group-time-' + (iii + 2))[0].value = hangout1.add(50, 'm').format('HH:mm');
                    } else {
                        $('#create-group-date-' + (iii + 2))[0].value = hangout1.add(10030, 'm').format('YYYY-MM-DD');
                        $('#create-group-time-' + (iii + 2))[0].value = hangout1.format('HH:mm');
                    }
                }
            }
        }
    });
}