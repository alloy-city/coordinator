import addTabs from './tabs/add'
import * as Course from './course'
import giveDiscountCode from './users/give-discount-code'
import * as presentation from './presentation/index'
import * as Debt from './users/debt/index'
import enlistUser from './users/enlist'
import freeUserSlot from './users/free-user-slot'
import * as Pack from './pack'
import * as Product from './product'
import { giveXP } from './users/giveXP'

addTabs()

window.Coordinator = {
    Course,
    giveDiscountCode,
    presentation,
    Debt,
    enlistUser,
    freeUserSlot,
    Pack,
    Product,
    giveXP
}