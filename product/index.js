import { post } from '../http'

function _isOnline(user_id){
    for (let onlineUser of Teacher.Live.onlineUsers) {
        if (onlineUser._id == user_id) {
            return true
        }
    }

    return false
}

function suggest(user_id, product_id){
    /// #if DEBUG
    console.log(user_id, product_id)
    /// #endif

    let suggestion = {
        type: "product_suggestion",
        to: user_id,
        from: Auth.userData._id,
        message: product_id,
        timestamp: new Date()
    }

    if (_isOnline(user_id)) Teacher.Live.eclassSocket.emit("message", suggestion)

    post(suggestion, 'message/suggestion', res => {
        /// #if DEBUG
        console.log(res)
        /// #endif
        
        notify("Message envoyé", "success", false)
    })
}

function giveAccess(user_id, product_id){
    /// #if DEBUG
    console.log(user_id, product_id)
    /// #endif
    
    post({user_id: user_id, product_id: product_id}, "product/give-access", res => {
        /// #if DEBUG
        console.log(res)
        /// #endif

        if (res == 0){
            notify("Apprenant avait déjà access à ce produit.", "success", false)
        } else {
            notify("Access donné", "success", false)
        }
    })
}

export { suggest, giveAccess }