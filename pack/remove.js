import db from '../../auth/src/database'
import clear from './clear'

export default () => {

    let confirmed = confirm("Savez-vous ce que vous faites là ?");

    if (confirmed) {
        db("DELETE", null, `pack/${Coordinator.Pack.pack._id}`, res => {
            console.log(res)
            notify("Pack effacé.", "danger", false)
            clear()
            Coordinator.Pack.search()
        })
    }
}