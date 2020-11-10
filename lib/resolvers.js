'use strict'

const courses = [
    {
        _id: 'anyid',
        title: 'Curso de GraphQL',
        teacher: "Juan Perez",
        description: "Una descripción",
        topic: "Desarrollo",
    },
    {
        _id: 'anyid',
        title: 'Curso de GraphQL 2',
        teacher: "Juan Perez",
        description: "Una descripción",
        topic: "Desarrollo",
    },
    {
        _id: 'anyid',
        title: 'Curso de GraphQL 3',
        teacher: "Juan Perez",
        description: "Una descripción",
        topic: "Desarrollo",
    }
]

module.exports = {
    hello: () => {
        return 'Hola mundo!'
    },
    getCourses: () => {
        return courses
    }
}
