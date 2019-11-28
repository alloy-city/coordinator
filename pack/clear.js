import { fillForm } from './ui'

let createButton = document.getElementById("coordinator-create-pack-create")
let deleteButton = document.getElementById("coordinator-create-pack-remove")
let modifyButton = document.getElementById("coordinator-create-pack-modify")
let cloneButton = document.getElementById("coordinator-create-pack-clone")
let clearButton = document.getElementById("coordinator-create-pack-clear")
let packId = document.getElementById("coordinator-pack-form-id");

export default function() {
    Coordinator.Pack.pack.clear()
    fillForm(Coordinator.Pack.pack)

    createButton.classList = "btn btn-default"
    deleteButton.classList = "hidden"
    modifyButton.classList = "hidden"
    cloneButton.classList = "hidden"
    clearButton.classList = "hidden"
    packId.innerText = "";
}
