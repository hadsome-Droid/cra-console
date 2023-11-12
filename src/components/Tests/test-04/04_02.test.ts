import {buildedYear,  demolishHousesOnTheStreet} from "./04_02";
import {CityType, testCity} from "../test-data/DataTest";

let city: CityType;

beforeEach(() => {
    city = testCity
})


test('houses on the that street should be demolish', () => {

    demolishHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(2)
    expect(city.houses[1].id).toBe(3)
})

test('house build year should be > 2010 ', ()=>{
  let builded = buildedYear(city, 2010)

    expect(builded.length).toBe(2)
    expect(builded[0].id).toBe(1)
    expect(builded[1].id).toBe(3)
})