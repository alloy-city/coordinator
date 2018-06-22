import db from '../../auth/src/database'

export default () => {

    let title = document.getElementById("coordinator-create-pack-title")
    let description = document.getElementById("coordinator-create-pack-description")
    let hidden = document.getElementById("coordinator-create-pack-hidden")
    let price = document.getElementById("coordinator-create-pack-price")
    let level = document.getElementById("coordinator-create-pack-level")
    let theme = document.getElementById("coordinator-create-pack-theme")

    Coordinator.Pack.pack.author = Auth.userData._id
    Coordinator.Pack.pack.title = title.value
    Coordinator.Pack.pack.description = description.value
    Coordinator.Pack.pack.hidden = hidden.checked
    Coordinator.Pack.pack.price = Number(price.value)
    Coordinator.Pack.pack.level = Number(level.selectedIndex)
    Coordinator.Pack.pack.theme = Number(theme.selectedIndex)

    /// #if DEBUG
    console.log(Coordinator.Pack.pack)
    /// #endif

    db("POST", Coordinator.Pack.pack, "pack/modify", response => {
        console.log(response)
        notify("Pack modifié.", "success", false)
        Coordinator.Pack.search()
    })
}