export type CityType = {
    title: string
    houses: Array<HouseType>
}

export type HouseType = {
    id: number
    buildeadAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(el => el.address.street.title === street)
}

export const buildedYear = (city: CityType, year: number) => {
    return city.houses.filter(el => el.buildeadAt > year)
}