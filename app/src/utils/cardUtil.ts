import MasterCard from '../commonFiles/images/cards/masterCard.svg'
import Visa from '../commonFiles/images/cards/visa.svg'
import UnionPay from '../commonFiles/images/cards/unionpay.svg'

export const getCardImage = (cardType: string): string | undefined => {
    if (cardType === 'mastercard') {
        return MasterCard
    } else if (cardType === 'visa') {
        return Visa
    } else if (cardType === 'unionpay') {
        return UnionPay
    }
}