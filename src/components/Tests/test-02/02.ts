type TechnologiesType = {
    id: number
    title: string
}

export type CityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}

export const student: StudentType = {
    id: 1,
    name: 'Ivan',
    age: 35,
    isActive: true,
    address: {
        streetTitle: 'Gassara 20A',
        city: {
            title: 'Elabuga',
            countryTitle: 'Russia'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'REACT'
        },
        {
            id: 3,
            title: 'JS'
        },
    ]
}

// console.log(student.address.city.title)
//  const car = {
//      brand: 'Toyota',
//      model: 'Prius',
//      year: 2010,
//      owners: [{name: 'John', ownYear: 2}, {name: 'Mary', ownYear: 6}],
//      engine:[
//      { type: 'Hybrid',
//      power: 121 },
//      {
//     type: 'Electric',
//     power: 97,
//   },
//   {
//     type: 'Gas',
//     power: 320,
//   },
//   ],
//      chassis: { weight: 1500, wheelbase: 2700 },
//      features: {
//          parkingAssist: 'Parking sensors',
//          isCruiseControl: true,
//      },
//  };