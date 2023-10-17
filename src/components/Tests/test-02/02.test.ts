import {CityType, student, StudentType} from "./02";
import {CarType} from "./02_02";

let students: StudentType
let oldCar: CarType

beforeEach(() => {
    oldCar = {
        brand: 'Toyota',
        model: 'Prius',
        year: 2010,
        owners: [
            {
                name: 'John', ownYear: 2
            },
            {
                name: 'Mary', ownYear: 6
            }
        ],
        engine: [
            {
                type: 'Hybrid',
                power: 121
            },
            {
                type: 'Electric',
                power: 97,
            },
            {
                type: 'Gas',
                power: 320,
            },
        ],
        chassis: {weight: 1500, wheelbase: 2700},
        features: {
            parkingAssist: 'Parking sensors',
            isCruiseControl: true,
        },
    }
})

test('technologies length should be 3', () => {
    expect(student.technologies.length).toBe(3)
})

test('city size should be 2', () => {
    expect(student.address.city.title).toBe(student.address.city.title)
})