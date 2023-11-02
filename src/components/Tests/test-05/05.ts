export type ManType = {
    name: string,
    age: number

}

const people: ManType[] = [
    {name: 'Ivan Ivanov', age: 32},
    {name: 'Andrew Fedorov', age: 66},
    {name: 'Max Petrov', age: 21},
]

const transformator = (man: ManType[]) => {
    man.map((el) => {

            // stack: ['css', 'html', 'js', 'tdd', 'react'],
                el.name.split(' ')[0]
                // el.name.split(' ')[1],

    })
}