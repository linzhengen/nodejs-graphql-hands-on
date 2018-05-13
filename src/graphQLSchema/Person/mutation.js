import {
    GraphQLString,
} from 'graphql';
import PersonType from './PersonType'

const createPerson = {
    type: PersonType,
    description: 'ユーザー作成',
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
    createPerson,
}