import db from '../../auth/src/database'

export default () => {
    Coordinator.Pack.pack.title = `${Coordinator.Pack.pack.title} - Copie`

    db("POST", Coordinator.Pack.pack, "pack/", response => {
        Coordinator.Pack.pack._id = response
        notify("Pack cloné.", "success", false)
        Coordinator.Pack.search()
    })
}