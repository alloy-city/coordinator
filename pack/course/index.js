let searchElement = document.getElementById("coordinator-product-search")
let contentContainer = document.getElementById("coordinator-pack-content")

import db from "../../../auth/src/database"
import { addListOfProducts } from "../ui"

export function search() {
    let s = searchElement.value
    console.log(s)

    let route = ""
    if (s.length > 0) route = `course/search/${s}`
    else route = `course/`

    db("GET", null, route, results => {
        console.log(results)
        addListOfProducts(results)
    })
}

export function add(_id){
    let element = document.getElementsByName(_id)[0]
    Coordinator.Pack.pack.courses.push(_id)
    contentContainer.appendChild(element)
    element.setAttribute("onclick", `Coordinator.Pack.Course.remove('${_id}')`)
}

export function remove(_id){
    let element = document.getElementsByName(_id)[0]
    let index = Coordinator.Pack.pack.courses.indexOf(_id)
    Coordinator.Pack.pack.courses.splice(index, 1)
    element.remove()
}