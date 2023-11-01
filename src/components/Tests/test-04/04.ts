export const ages = [18, 22, 59, 63, 99, 120, 12, 90]

const predicate = ( age: number) => {
    return age > 90
}

const oldAges = [99, 120]; // > 90

type  CourseType = {
    title: string
    price: number
}

export const courses = [
    {title: 'CSS', price: 110},
    {title: 'js', price: 200},
    {title: 'Rect', price: 150},
]

// < 160
const chipPredicate = (course: CourseType) => {
    return course.price < 160
}

const chipCourses = [
    {title: 'CSS', price: 110},
    {title: 'React', price: 150},

]