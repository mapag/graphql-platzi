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
        _id: 'anyid2',
        title: 'Curso de GraphQL 2',
        teacher: "Juan Perez",
        description: "Una descripción",
        topic: "Desarrollo",
    },
    {
        _id: 'anyid3',
        title: 'Curso de GraphQL 3',
        teacher: "Juan Perez",
        description: "Una descripción",
        topic: "Desarrollo",
    }
]

module.exports = {
    Query: {
        hello: () => {
            return 'Hola mundo!'
        },
        getCourses: () => {
            return courses
        },
        getCourse: (root, args) => {
            const course = courses.find(course => course._id === args.id)
            return course
        }
    }
}
