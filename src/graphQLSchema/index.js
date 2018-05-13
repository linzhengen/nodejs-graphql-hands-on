import {GraphQLSchema} from 'graphql';
import QueryType from '@/graphQLSchema/query';
import MutationType from '@/graphQLSchema/mutation';

export default new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});
