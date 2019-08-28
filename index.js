import addTabs from './tabs/add'
import * as Course from './course'
// import giveDiscountCode from './users/give-discount-code'
// import * as presentation from './presentation/index'
// import * as Debt from './users/debt/index'
// import enlistUser from './users/enlist'
// import freeUserSlot from './users/free-user-slot'
import * as Pack from './pack'
import * as Product from './product'
import { getRelations } from './cslc'
import { giveXP, publishTestimony } from './users'

addTabs();
getRelations();

// build list of themes based on string.material.themes array
// console.log(string.material.themes);

let themesList = "";
let i, l;
l = string.material.themes.length;
for (i = 0; i < l; i++) {
    themesList += `<option value="${i}">${string.material.themes[i].adjective}</option>`;
}

document.getElementById("create-group-theme").innerHTML = themesList;
document.getElementById("coordinator-create-pack-theme").innerHTML = themesList;

window.Coordinator = {
    Course,
    // giveDiscountCode,
    // presentation,
    // Debt,
    // enlistUser,
    // freeUserSlot,
    Pack,
    Product,
    giveXP,
    publishTestimony
}
