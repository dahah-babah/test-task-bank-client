import axios from 'axios'
import { IUser } from '../types'

const USERS_URL = 'https://hr.peterpartner.net/test/android/v1/users.json'
const CURRENCY_URL = 'https://www.cbr-xml-daily.ru/daily_json.js'

export const getUsers = async () => {
    const { data } = await axios.get<IUser[]>(USERS_URL)
    return data
}

export const getCurrancyRate = async () => {
    const { data } = await axios.get<any[]>(CURRENCY_URL)
    return data
}