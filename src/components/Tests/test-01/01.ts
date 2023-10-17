


export const splitIntoWords = (str: string) => {
        return str.split(' ')
}

export const sum = (a:number, b:number) =>{
        return a + b
}

export const mult = (a:number, b:number) =>{
        return a * b
}

export const toUpperLetter = (str: string) => {
        let lowerArr = str.toLowerCase().split(' ')
           let result = lowerArr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        return result
}