import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLBoolean,
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'PersonProfileInput',
    fields: {
        birth: {
            type: GraphQLString,
            description: '生年月日',
        },
        address: {
            type: GraphQLString,
            description: '住所',
        },
        tel: {
            type: GraphQLString,
            description: '電話番号',
        },
        isStar: {
            type: GraphQLBoolean,
            description: '注目ユーザフラグ',
        },
    },
});
