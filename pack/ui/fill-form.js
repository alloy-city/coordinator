let title = document.getElementById("coordinator-create-pack-title")
let description = document.getElementById("coordinator-create-pack-description")
let hidden = document.getElementById("coordinator-create-pack-hidden")
let price = document.getElementById("coordinator-create-pack-price")
let level = document.getElementById("coordinator-create-pack-level")
let theme = document.getElementById("coordinator-create-pack-theme")
let content = document.getElementById("coordinator-pack-content")

export default (pack) => {
    content.innerHTML = ""

    title.value = pack.title
    description.value = pack.description
    hidden.checked = pack.hidden
    price.value = pack.price
    level.selectedIndex = pack.level
    theme.selectedIndex = pack.theme

    for (let i=0; i<pack.chapters.length; i++){
        content.appendChild(htmlToElement(`
            <button name="${pack.chapters[i]._id}" type="button" class="list-group-item list-group-item-warning" onclick="Coordinator.Pack.Chapter.remove('${pack.chapters[i]._id}')">
                ${pack.chapters[i].title} - ${pack.chapters[i].description}
            </button>
        `))

        pack.chapters[i] = pack.chapters[i]._id
    }
    
    for (let i=0; i<pack.courses.length; i++){
        content.appendChild(htmlToElement(`
            <button name="${pack.courses[i]._id}" type="button" class="list-group-item list-group-item-success" onclick="Coordinator.Pack.Course.remove('${pack.courses[i]._id}')">
                ${pack.courses[i].title} - ${pack.courses[i].description}
            </button>
        `))

        pack.courses[i] = pack.courses[i]._id
    }

}