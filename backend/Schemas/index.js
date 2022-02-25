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
                nome: { type: GraphQLString },
                idade: { type: GraphQLInt },
                email: { type: GraphQLString },
                telefone: { type: GraphQLString }
            },
            resolve(parent, args) {
                casesData.push({
                    id: alunoData.length + 1,
                    nome: args.nome,
                    idade: args.idade,
                    email: args.email,
                    telefone: args.telefone
                })
                return args;
            }
        }
    }
})


module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })