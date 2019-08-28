export default function () {
    let tabsMenuMarkup = `
        <li role="presentation" class="">
            <a href="#courses" aria-controls="coordination" role="tab" data-toggle="tab">Parcours</a>
        </li>
        <li role="presentation" class="">
            <a href="#packs" aria-controls="didactician" role="tab" data-toggle="tab">Packs</a>
        </li>
        <li role="presentation" class="">
            <a href="#cslc" aria-controls="cslc" role="tab" data-toggle="tab">Apprenants+Parcours</a>
        </li>`;

    $(".nav-tabs").append(tabsMenuMarkup);
}
