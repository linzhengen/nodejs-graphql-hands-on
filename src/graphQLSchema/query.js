import {
    GraphQLObjectType,
} from 'graphql';
import {
    personList,
} from './Person/query';

export default new GraphQLObjectType({
    name: 'Query',
    fields: {
        personList,
    }
});