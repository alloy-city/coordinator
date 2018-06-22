import createPresentation from './create'
import addPresentation from './add'
import modifyPresentation from './modify'

//prevent defalt behavior for tab key in #slide text area
$(document).delegate('#create-presentation-slides', 'keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
        e.preventDefault();
        var start = $(this).get(0).selectionStart;
        var end = $(this).get(0).selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        $(this).val($(this).val().substring(0, start)
            + "\t"
            + $(this).val().substring(end));

        // put caret at right position again
        $(this).get(0).selectionStart =
            $(this).get(0).selectionEnd = start + 1;
    }
});

export {
    createPresentation,
    addPresentation,
    modifyPresentation
}