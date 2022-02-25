const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;


const AlunoType = new GraphQLObjectType({
    name: 'Cases',
    fields: () => ({
        id: { type: GraphQLInt },
        name: {type: GraphQLString },
        age: { type: GraphQLInt }, 
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        text: { type: GraphQLString },
    })
})

module.exports = AlunoType;