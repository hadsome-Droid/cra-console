import {mult, splitIntoWords, sum, toUpperLetter} from "./01";

let a: number
let b: number
let c: number

let str1: string
let str2: string
let str3: string

test('sum should be correct', () => {
    //data
    a = 1
    b = 2
    c = 3

    //action
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test('mult should be correct', () => {
    //data
    a = 1
    b = 2
    c = 3

    //action
    const result1 = mult(a, b)
    const result2 = mult(b, c)

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('should be return array correct length', ()=>{
    //data
    str1 = 'Hello my Friend!'
    str2 = 'goodbye our old car'
    str3 = 'this is my first test that I wrote myself'

    //action
    const result = splitIntoWords(str1)
    const result2 = splitIntoWords(str2)
    const result3 = splitIntoWords(str3)

    //expect result
    expect(result).toStrictEqual(['Hello', 'my', 'Friend!'])
    expect(result2).toStrictEqual(['goodbye', 'our', 'old', 'car'])
    expect(result3).toStrictEqual(['this', 'is', 'my', 'first', 'test', 'that', 'I', 'wrote', 'myself'])

})

test('first letter in the sting should be capitalize', () => {
    //data
    str1 = 'Без труда не выловишь и рыбку из пруда'
    str2 = 'Всё хорошо, что хорошо кончается'
    str3 = 'В гостях хорошо, а дома лучше'

    //action
    const result = toUpperLetter(str1)
    const result2 = toUpperLetter(str2)
    const result3 = toUpperLetter(str3)

    //expect result
    expect(result).toStrictEqual('Без Труда Не Выловишь И Рыбку Из Пруда')
    expect(result2).toStrictEqual('Всё Хорошо, Что Хорошо Кончается')
    expect(result3).toStrictEqual('В Гостях Хорошо, А Дома Лучше')
})