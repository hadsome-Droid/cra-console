import {CityType, HouseType, StreetType, AddressType} from "../test-data/DataTest";


export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(el => el.address.street.title === street)
}

export const buildedYear = (city: CityType, year: number) => {
    return city.houses.filter(el => el.yearBuilt > year)
}