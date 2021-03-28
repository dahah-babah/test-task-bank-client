import axios from 'axios'
import MasterCard from './images/masterCard.svg'
import Visa from './images/visa.svg'
import UnionPay from './images/unionpay.svg'

const USERS_URL = 'https://hr.peterpartner.net/test/android/v1/users.json'
const CURRENCY_URL = 'https://www.cbr-xml-daily.ru/daily_json.js'

export const getUsers = async () => {
    const { data } = await axios.get(USERS_URL)
    return data
}

export const getCurrancyRate = async () => {
    const { data } = await axios.get(CURRENCY_URL)
    return data
}

export const getCardImage = (cardType: string) => {
    if (cardType === 'mastercard') {
        return MasterCard
    } else if (cardType === 'visa') {
        return Visa
    } else if (cardType === 'unionpay') {
        return UnionPay
    }
}

export const getCurrencySign = (value: string): string => {
    if (value === 'GBP') {
        return '£'
    } else if (value === 'EUR') {
        return '€'
    } else if (value === 'RUB') {
        return '₽'
    } else {
        return ''
    }
}

export const getCurrencyStr = (value: string): string => {
    let array = value.split('')
    let newStrLen = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '.') {
            array[i] = ','
            newStrLen = i + 3                
        }
    }

    let newArray = array.slice(0, newStrLen + 1)

    if (Number(newArray[newArray.length - 1]) >= 5) {
        newArray[newArray.length - 2] = (Number(newArray[newArray.length - 2]) + 1).toString() 

        if (newArray[newArray.length - 2] === '10') {
            newArray[newArray.length - 2] = '0'
            newArray[newArray.length - 3] = (Number(newArray[newArray.length - 3]) + 1).toString()
        }
    }

    newArray.pop()            
    
    return newArray.join('')
}

export const getCurrencyRateToRuble = (currencyRate: object, value: string): number => {
    if (value === 'RUB') {
        return 1
    } else {
        return currencyRate[value].Value
    }
}

export const getCurrency = (currencyRate: object, valueToRuble: number, userBalance: number): number => {
    const dollarValue: number = getCurrencyRateToRuble(currencyRate, 'USD')
    return userBalance * (dollarValue/valueToRuble)
}