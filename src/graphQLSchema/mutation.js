import {
    GraphQLObjectType,
} from 'graphql';
import {createPerson} from './Person/mutation';
import {createPersonProfile} from './PersonProfile/mutation';

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createPerson,
        createPersonProfile,
    }
});