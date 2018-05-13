import {
    GraphQLObjectType,
    GraphQLID,
} from 'graphql';
import PersonProfileInputType from "./PersonProfileInputType";

const PersonProfileType = new GraphQLObjectType({
    name: 'PersonProfile',
    description: 'ユーザプロフィール',
    args: {
        personId: {
            type: GraphQLID,
        },
        input: {
            type: PersonProfileInputType,
        },
    },
});

export default PersonProfileType;