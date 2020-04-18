import db from '../../auth/src/database';
import clear from './clear';
import { fillForm } from './ui';

let createButton = document.getElementById("coordinator-create-pack-create")
let deleteButton = document.getElementById("coordinator-create-pack-remove")
let modifyButton = document.getElementById("coordinator-create-pack-modify")
let cloneButton = document.getElementById("coordinator-create-pack-clone")
let clearButton = document.getElementById("coordinator-create-pack-clear")
let hideButton = document.getElementById("coordinator-hide-pack")
let publishButton = document.getElementById("coordinator-publish-pack")

export default function (_id) {
    clear();

    // get the pack from db
    db("GET", null, `pack/${_id}`, res => {
        console.log(res)

        // setup buttons
        createButton.classList = "hidden"
        clearButton.classList = "btn btn-default"
        cloneButton.classList = "btn btn-default"

        if (res.hidden) {
            publishButton.classList = "btn btn-success"
            publishButton.onclick = () => {
                db("GET", null, `pack/publish/${_id}`, (res) => {
                    if (res === "PACK_PUBLISHED") {
                        notify("Pack publié", "success", false)
                        Coordinator.Pack.selectPack(_id);
                    }
                });
            }
        } else {
            hideButton.classList = "btn btn-info"
            hideButton.onclick = () => {
                db("GET", null, `pack/hide/${_id}`, (res) => {
                    if (res === "PACK_HIDDEN") {
                        notify("Pack caché", "info", false)
                        Coordinator.Pack.selectPack(_id);
                    }
                });
            }
        }

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
