import fillForm from './fill-form'

let searchResultsElement = document.getElementById("coordinator-pack-search-results")

function addListOfProducts(products){
    searchResultsElement.innerHTML = ""

    for (let i=0; i<products.length; i++){
        let helperClass, action

        if (products[i].lessons) {
            helperClass = "warning"
            action = "Chapter.add"
        } else if (products[i].hangouts) {
            helperClass = "success"
            action = "Course.add"
        } else {
            helperClass = "info"
            action = "selectPack"
        }

        searchResultsElement.appendChild(htmlToElement(`
            <button name="${products[i]._id}" type="button" class="list-group-item list-group-item-${helperClass}" onclick="Coordinator.Pack.${action}('${products[i]._id}')">
                ${products[i].title} - ${products[i].description}
            </button>`))
    }
}

export { addListOfProducts, fillForm }