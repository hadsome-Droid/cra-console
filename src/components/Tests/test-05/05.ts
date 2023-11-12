import {CityType, HouseType} from "../test-data/DataTest";

export type ManType = {
    name: string,
    age: number

}



const people: ManType[] = [
    {name: 'Ivan Ivanov', age: 32},
    {name: 'Andrew Fedorov', age: 66},
    {name: 'Max Petrov', age: 21},
]

export const transformator = (man: ManType) => ({
    stack: ['css', 'react', 'js', 'TDD'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})

export const dev = people.map(man => ({
    stack: ['css', 'react', 'js', 'TDD'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

export const messages = people.map(el => `Hello ${el.name.split(' ')[0]}. Welcome to Word Ass!!!`)

export const createGreetingMessage = (people: ManType[]) => {
    return people.map(el => `Hello ${el.name.split(' ')[0]}. Welcome to Word Ass!!!`)
}

export const getStreetsTitleHouse = (buildings: HouseType[]) => {
return buildings.map(b => b.address.street.title)
}

export const getStreetsTitleGasStation = (gasStation: HouseType[]) => {
    return gasStation.map(g => g.address.street.title)
}

export const createMessages = (gasStation: HouseType[]) => {
    return gasStation.map(el => `That Gas Station building in ${el.yearBuilt}`)
}