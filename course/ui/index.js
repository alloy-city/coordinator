import addHangout from './add-hangout'
import removeHangout from './remove-hangout'
import drawHangouts from './draw-hangouts'
import doubleHangouts from './double-hangouts'
import oneHangout from './one-hangout'
import eightHangouts from './eight-hangouts'
import teacherList from './teacher-list'
import intensiveHangouts from './intensive-hangouts.js'
import extractCourseFromForm from './extract-course-from-form'
import keyboard from './keyboard'
import courseList from './course-list'
import fillForm from "./fill-form"

export {
    drawHangouts,
    addHangout,
    removeHangout,
    doubleHangouts,
    oneHangout,
    eightHangouts,
    intensiveHangouts,
    teacherList,
    extractCourseFromForm,
    courseList,
    fillForm
}

keyboard()
drawHangouts([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined])