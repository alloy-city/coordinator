import { post } from '../http'

function publishTestimony(user){
    /// #if DEBUG
    console.log(user)
    /// #endif

    let form = htmlToElement(`
    <div class="modal fade" id="testimonyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Témoignage de ${user.name ? user.name : user.mainEmail}</h4>
                </div>
                <div class="modal-body">
                    <p class="text-muted">anglais</p>
                    <textarea id="testemony-en" class="form-control space-below" placeholder="En anglais" rows="4"></textarea>
                    <p class="text-muted">français</p>
                    <textarea id="testemony-fr" class="form-control space-below" placeholder="En français" rows="4"></textarea>
                    <p class="text-muted">portuguais</p>
                    <textarea id="testemony-pt" class="form-control space-below" placeholder="En portuguais" rows="4"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Annuler</button>
                    <button id="testimony-publish" type="button" class="btn btn-primary">Publier</button>
                </div>
            </div>
        </div>
    </div>`)

    document.body.appendChild(form)

    let saveButton = document.getElementById("testimony-publish")
    saveButton.addEventListener("click", () => {
        let body = {
            user_id: user._id,
            testimonies: {
                en: document.getElementById("testemony-en").value,
                fr: document.getElementById("testemony-fr").value,
                pt: document.getElementById("testemony-pt").value
            },
            timestamp: new Date()
        }

        post(body, "user/testimony", res => {
            /// #if DEBUG
            console.log(res.status)
            /// #endif

            if (res.status == 200){
                notify("Témoignage sauvegardé.", "info", false)
                $("#testimonyModal").modal("hide")
            } else {
                notify("Il y a eu un problème :(", "warning", true)
            }
        })
    })

    $("#testimonyModal").modal("show")
    $("#testimonyModal").on('hidden.bs.modal', e => {
        e.target.remove()
    })

}

export { publishTestimony }