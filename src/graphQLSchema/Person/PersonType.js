import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} from 'graphql';

const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'ユーザ',
    fields: {
        id: {
            type: GraphQLID,
            description: 'ユーザID',
        },
        name: {
            type: GraphQLString,
            description: 'ユーザ名',
        },
        email: {
            type: GraphQLString,
            description: 'メールアドレス',
        },
        password: {
            type: GraphQLString,
            description: 'パスワード',
        },
        profile: {
            get type() {
                return require('../PersonProfile/PersonProfileType').default;
            },
            description: 'プロフィール',
            args: {
                id: {
                    type: GraphQLID,
                },
            },
        },
    },
});

export default PersonType;