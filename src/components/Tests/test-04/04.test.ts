import {ages, courses} from "./04";

test('should take old men older then 90', () =>{
    // const ages = [18, 22, 59, 63, 99, 120, 12, 90]

    const oldAges = ages.filter(elm => elm > 90)

    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(99)
    expect(oldAges[1]).toBe(120)
})

test('should take courses chipper 160', () =>{
    // const ages = [18, 22, 59, 63, 99, 120, 12, 90]

    const chipCourses = courses.filter(elm => elm.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].price).toBe(110)
    expect(chipCourses[1].price).toBe(150)
})

test('get only completed tasks', ()=>{
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(elm => elm.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('Milk')
    expect(completedTasks[1].title).toBe('Sugar')
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})

test('get only uncompleted tasks', ()=>{
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const unCompletedTasks = tasks.filter(elm => !elm.isDone)

    expect(unCompletedTasks.length).toBe(2)
    expect(unCompletedTasks[0].title).toBe('Bread')
    expect(unCompletedTasks[1].title).toBe('Salt')
    expect(unCompletedTasks[0].id).toBe(1)
    expect(unCompletedTasks[1].id).toBe(3)
})