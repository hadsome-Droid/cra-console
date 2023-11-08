type OwnerType = {
    name: string
    ownYear: number
}

type EngineType = {
    type: string
    power: number
}

type ChassisType = {
    weight: number
    wheelbase: number
}

type FeaturesType = {
    parkingAssist: string
    isCruiseControl: boolean
}

export type CarType = {
    model: string
    brand: string
    year: number
    owners: OwnerType[]
    engine: EngineType[]
    chassis: ChassisType
    features: FeaturesType
}

 const car = {
     brand: 'Toyota',
     model: 'Prius',
     year: 2010,
     owners: [{name: 'John', ownYear: 2}, {name: 'Mary', ownYear: 6}],
     engine:[
     { type: 'Hybrid',
     power: 121 },
     {
    type: 'Electric',
    power: 97,
  },
  {
    type: 'Gas',
    power: 320,
  },
  ],
     chassis: { weight: 1500, wheelbase: 2700 },
     features: {
         parkingAssist: 'Parking sensors',
         isCruiseControl: true,
     },
 };