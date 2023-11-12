import {createGreetingMessage, createMessages, getStreetsTitleGasStation, getStreetsTitleHouse, ManType} from "./05";
import {CityType, testCity} from "../test-data/DataTest";

let people: ManType[] =[]
let city: CityType

beforeEach(()=>{
    people = [
        {name: 'Ivan Ivanov', age: 32},
        {name: 'Andrew Fedorov', age: 66},
        {name: 'Max Petrov', age: 21},
    ]
    city = testCity
})

test('should be array of greeting messages', ()=>{
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Ivan. Welcome to Word Ass!!!')
    expect(messages[2]).toBe('Hello Max. Welcome to Word Ass!!!')
})

test('should be array of street title', ()=>{
    const streets = getStreetsTitleHouse(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('AvenueBroadway')
    expect(streets[1]).toBe('StreetWest 42nd')
    expect(streets[2]).toBe('East 101st')
})

test('list of streets title of gas station', ()=>{
    const gasStationAddress = getStreetsTitleGasStation(city.gasStations)

    expect(gasStationAddress.length).toBe(2)
    expect(gasStationAddress[1]).toBe('Wall Street')
    expect(gasStationAddress[0]).toBe('StreetMadison')
})

test('create message with year build gas station', ()=>{
    const messages = createMessages(city.gasStations)

    expect(messages.length).toBe(2)
    expect(messages[0]).toBe("That Gas Station building in 1967")
    expect(messages[1]).toBe("That Gas Station building in 1998")

})