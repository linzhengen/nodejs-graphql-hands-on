import {
    GraphQLList,
} from 'graphql';
import PersonType from './PersonType';

const personList = {
    type: new GraphQLList(PersonType),
    description: 'ユーザリスト',
};

export {
    personList,
};
