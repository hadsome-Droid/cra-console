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