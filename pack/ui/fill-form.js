let title = document.getElementById("coordinator-create-pack-title");
let description = document.getElementById("coordinator-create-pack-description");
let hidden = document.getElementById("coordinator-create-pack-hidden");
let price = document.getElementById("coordinator-create-pack-price");
let level = document.getElementById("coordinator-create-pack-level");
let theme = document.getElementById("coordinator-create-pack-theme");
let content = document.getElementById("coordinator-pack-content");
let packId = document.getElementById("coordinator-pack-form-id");

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function() {
        notify("URL copiée sur la zone de transfers.", "success", false);
    }, function() {
        console.error("Couldn't copy");
        notify("URL n'a pas été copiée sur la zone de transfers.", "danger", true);
    });
}

export default (pack) => {
    content.innerHTML = ""

    title.value = pack.title
    description.value = pack.description
    hidden.checked = pack.hidden
    price.value = pack.price
    level.selectedIndex = pack.level
    theme.selectedIndex = pack.theme
    packId.innerText = pack._id;
    packId.onclick = function () {
        updateClipboard(`${apiDomain}/p/${pack._id}`);
        console.log(pack._id);
    };

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