import {
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
import PersonProfileInputType from "./PersonProfileInputType";

const PersonProfileType = new GraphQLObjectType({
    name: 'PersonProfile',
    description: 'ユーザプロフィール',
    fields: {
        name: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        password: {
            type: GraphQLString,
        },
    },
});

export default PersonProfileType;