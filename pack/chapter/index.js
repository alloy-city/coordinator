let searchElement = document.getElementById("coordinator-product-search")
let contentContainer = document.getElementById("coordinator-pack-content")

import db from "../../../auth/src/database"
import { addListOfProducts } from "../ui"

export function search(){
    let s = searchElement.value
    console.log(s)

    let route = ""
    if (s.length > 0) route = `chapter/search/${s}`
    else route = `chapter/latest/`

    db("GET", null, route, results => {
        console.log(results)
        addListOfProducts(results)
    })
}

export function add(_id){
    let element = document.getElementsByName(_id)[0]
    Coordinator.Pack.pack.chapters.push(_id)
    contentContainer.appendChild(element)
    element.setAttribute("onclick", `Coordinator.Pack.Chapter.remove('${_id}')`)
}

export function remove(_id) {
    let element = document.getElementsByName(_id)[0]
    let index = Coordinator.Pack.pack.chapters.indexOf(_id)
    Coordinator.Pack.pack.chapters.splice(index, 1)
    element.remove()
}