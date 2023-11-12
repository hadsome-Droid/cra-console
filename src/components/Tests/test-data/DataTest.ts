export type CityType = {
    title: string
    houses: Array<HouseType>
    gasStations: HouseType[]
}

export type HouseType = {
    id: number
    yearBuilt: number
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


export const testCity = {
    title: 'New York',
    houses: [
        {
            id: 1,
            yearBuilt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {title: 'AvenueBroadway'}
            }
        },
        {
            id: 2,
            yearBuilt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {title: 'StreetWest 42nd'}
            }
        },
        {
            id: 3,
            yearBuilt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {title: 'East 101st'}
            }
        },
    ],
    gasStations:[
        {
            id: 1,
            yearBuilt: 1967,
            repaired: true,
            address: {
                number: 35,
                street: {title: 'StreetMadison'}
            }
        },
        {
            id: 2,
            yearBuilt: 1998,
            repaired: true,
            address: {
                number: 12,
                street: {title: 'Wall Street'}
            }
        }
    ]
}
