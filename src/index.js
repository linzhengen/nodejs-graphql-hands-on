import express from 'express';
import bodyParser from 'body-parser';
import graphQLSchema from '@/graphQLSchema';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: graphQLSchema }));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(PORT);