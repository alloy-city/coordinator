import create from './create'
import searchLessons from './search-lessons'
import clear from './clear'
import addLessonsList from './add-lessons-list'
import selectLesson from './select-lesson'
import clearLessonsOnPack from './clear-lessons-on-pack'
import getLatestPacks from './get-latest-packs'
import addPacksList from './add-packs-list'
import selectPack from './select-pack'
import modify from './modify'
import remove from './remove'
import clone from './clone'

import * as Chapter from './chapter'
import * as Course from './course'
import * as Product from './product'
import * as Ui from './ui'

import search from './search'

class Pack {
    constructor() {
        this._id = ""
        this.author = ""
        this.date = new Date()
        this.title = ""
        this.description = ""
        this.hidden = false
        this.level = 0
        this.theme = 0
        this.price = 209
        this.chapters = []
        this.courses = []
    }

    clear(){
        this._id = ""
        this.author = ""
        this.date = new Date()
        this.title = ""
        this.description = ""
        this.hidden = false
        this.level = 0
        this.theme = 0
        this.price = 209
        this.chapters = []
        this.courses = []
    }
}

let pack = new Pack()

export {
    pack,
    create,
    searchLessons,
    clear,
    addLessonsList,
    selectLesson,
    clearLessonsOnPack,
    getLatestPacks,
    addPacksList,
    selectPack,
    modify,
    remove,
    clone,
    Chapter,
    Course,
    Product,
    search,
    Ui
}