import db from '../../auth/src/database'
import { fillForm } from './ui'

let title = document.getElementById("coordinator-create-pack-title")
let description = document.getElementById("coordinator-create-pack-description")
let hidden = document.getElementById("coordinator-create-pack-hidden")
let price = document.getElementById("coordinator-create-pack-price")
let level = document.getElementById("coordinator-create-pack-level")
let theme = document.getElementById("coordinator-create-pack-theme")
let createButton = document.getElementById("coordinator-create-pack-create")
let deleteButton = document.getElementById("coordinator-create-pack-remove")
let modifyButton = document.getElementById("coordinator-create-pack-modify")
let cloneButton = document.getElementById("coordinator-create-pack-clone")
let clearButton = document.getElementById("coordinator-create-pack-clear")

export default function (_id) {
    console.log(_id);

    
    // get the pack from db
    db("GET", null, `pack/${_id}`, res => {
        console.log(res)

        // setup buttons
        createButton.classList = "hidden"
        clearButton.classList = "btn btn-default"
        cloneButton.classList = "btn btn-default"
    
        if (res.author == Auth.userData._id){
            deleteButton.classList = "btn btn-danger"
            modifyButton.classList = "btn btn-default"
        }

        // update Coordinator.Pack.pack object.
        Coordinator.Pack.pack.title = res.title
        Coordinator.Pack.pack.description = res.description
        Coordinator.Pack.pack.hidden = res.hidden
        Coordinator.Pack.pack.author = res.author
        Coordinator.Pack.pack.chapters = res.chapters
        Coordinator.Pack.pack.courses = res.courses
        Coordinator.Pack.pack.price = res.price
        Coordinator.Pack.pack.level = res.level
        Coordinator.Pack.pack.theme = res.theme
        Coordinator.Pack.pack._id = res._id
        
        // update DOM
        fillForm(Coordinator.Pack.pack)
    })


}