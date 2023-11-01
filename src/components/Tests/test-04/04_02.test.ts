import {buildedYear, CityType, demolishHousesOnTheStreet} from "./04_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildeadAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'White street'}
                }
            },
            {
                id: 2,
                buildeadAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: 'Happy street'}
                }
            },
            {
                id: 3,
                buildeadAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {title: 'Happy street'}
                }
            },
        ]
    }
})


test('houses on the that street should be demolish', () => {

    demolishHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(2)
    expect(city.houses[1].id).toBe(3)
})

test('house build year should be > 2010 ', ()=>{
    buildedYear(city, 2010)

    expect(city.houses.length).toBe(2)
})