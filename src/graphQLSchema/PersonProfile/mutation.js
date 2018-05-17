import {
    GraphQLID,
} from 'graphql';
import PersonProfileType from "./PersonProfileType";
import PersonProfileInputType from "./PersonProfileInputType";

const createPersonProfile = {
    type: PersonProfileType,
    description: 'ユーザープロフィール作成',
    args: {
        personId: {
            type: GraphQLID,
        },
        input: {
            type: PersonProfileInputType,
        },
    },
};

export {
    createPersonProfile,
};
