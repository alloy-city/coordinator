let searchElement = document.getElementById("coordinator-product-search")

import db from "../../auth/src/database"
import { addListOfProducts } from "./ui"

export default () => {
    let s = searchElement.value
    console.log(s)

    let route = ""
    if (s.length > 0) route = `pack/search/${s}`
    else route = `pack/`

    db("GET", null, route, results => {
        console.log(results)
        addListOfProducts(results)
    })
}