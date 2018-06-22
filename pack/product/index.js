let searchElement = document.getElementById("coordinator-product-search")

import db from "../../../auth/src/database"
import { addListOfProducts } from "../ui"

export function search() {
    let s = searchElement.value
    console.log(s)

    let route = ""
    if (s.length > 0) route = `pack/product/search/${s}`
    else route = `pack/product/search/Noob`

    db("GET", null, route, results => {
        console.log(results)
        addListOfProducts(results)
    })
}