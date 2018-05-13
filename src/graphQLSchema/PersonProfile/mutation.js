import {
    GraphQLString,
} from 'graphql';
import PersonProfileType from "./PersonProfileType";

const createPersonProfile = {
    type: PersonProfileType,
    description: 'ユーザープロフィール作成',
    args: {
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
};

export {
    createPersonProfile,
};
