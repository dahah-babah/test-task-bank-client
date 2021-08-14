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

export const getCurrencyRateToRuble = (currencyRate: any, value: string): number => {
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