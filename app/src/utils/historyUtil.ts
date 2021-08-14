import UserData from '../commonFiles/mockUsers.json'
import Apple from '../commonFiles/images/history/apple.png'
import Dropbox from '../commonFiles/images/history/dropbox.png'
import Facebook from '../commonFiles/images/history/facebook.png'
import Netflix from '../commonFiles/images/history/netflix.png'
import Tesla from '../commonFiles/images/history/tesla.png'

export const getUserHistory = (cardType: string) => {
    const userData = UserData.find(user => user.type === cardType)

    if (userData) {
        return userData.transaction_history
    } else {
        return null
    }
}

export const getHistoryImage = (value: string) => {
    switch(value) {
        case 'apple': return Apple
        case 'dropbox': return Dropbox
        case 'facebook': return Facebook
        case 'netflix': return Netflix
        case 'tesla': return Tesla

        default: return Apple
    }
}
