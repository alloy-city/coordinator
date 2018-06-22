export default function () {
    let tabsMenuMarkup = `
        <li role="presentation" class="">
            <a href="#courses" aria-controls="coodination" role="tab" data-toggle="tab">Parcours</a>
        </li>
        <li role="presentation" class="">
            <a href="#packs" aria-controls="didactician" role="tab" data-toggle="tab">Packs</a>
        </li>`

    $(".nav-tabs").append(tabsMenuMarkup)
}