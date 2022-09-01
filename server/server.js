const express = require('express');
const path = require('path');
const {ApolloServer} = require('apollo-server-express');
const db = require('./config/connection');
const {typeDefs, resolvers} = require('./schemas');
const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

async function startServer(typeDefs, resolvers) {
    const server = new ApolloServer ({
        typeDefs,
        resolvers,
        constext: {
            hello: "Hello There!"
        }
    });
    
    await server.start();

    server.applyMiddleware({app});

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log('Express started on port %s', PORT);
            console.log('GraphQL is ready on %s', server.graphqlaPath);
        })
    });
}

startServer(typeDefs, resolvers);