const graphql = require('graphql');
const CasesType = require('../TypeDefs/cases');
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
        getAllCases: {
            type: new GraphQLList(CasesType),
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return casesData;
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createCase: {
            type: CasesType,
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
                return {...args, id: casesData.length + 1};
            }
        }
    }
})


module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })