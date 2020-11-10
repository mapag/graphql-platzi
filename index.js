'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const { readFileSync } = require('fs')
const { join } = require('path')

const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.PORT || 3000

console.log()

const schema = buildSchema(readFileSync(
  join(__dirname, 'lib', 'schema.graphql')
).toString('utf8'))

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

// = hola mundo consola
// graphql(schema, '{ hello }', resolvers).then(result => console.log(result))
