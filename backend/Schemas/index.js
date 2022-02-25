const graphql = require('graphql');
const AlunoType = require('./TypeDefs/AlunoType');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLString
} = graphql;


const casesData = require('../demo_data.json');

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllAlunos: {
            type: new GraphQLList(AlunoType),
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                //Acesso a um DB.
                return casesData;
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createAluno: {
            type: AlunoType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                email: { type: GraphQLString },
                phone: { type: GraphQLString },
                text: { type: GraphQLString }
            },
            resolve(parent, args) {
                casesData.push({
                    id: casesData.length + 1,
                    name: args.name,
                    age: args.age,
                    email: args.email,
                    phone: args.phone,
                    text: args.text
                })
                return args;
            }
        }
    }
})


module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })