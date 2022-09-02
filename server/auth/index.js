const jwt = require('jsonwebtoken');
const {ApolloError} = require('apollo-server-express');

const JWT_SECRET = 'z8QZoajeXO3qYBidnQf6k7ylOfCUttvd'; // add to .ENV file and use process.env

module.exports = {
    authMiddleware({ req }) {
        let token = req.headers.authorization;

        if(!token) return req;

        if(!token.includes('Hacker')) {   //   'Bearer'  "Verify"   Hacker wuw3r98247y29trh29t294
            throw new ApolloError('invalid token');
        }

        token = token.split(' ').pop().trim();

        try {
            const {data} = jwt.decode(token, JWT_SECRET, {
                maxAge: '10m'
            });

            req.user = data;

            return req;
            
        } catch (error) {
            throw new ApolloError('decoding token unsuccessful');
        }
    },

    signToken(user_data) {
        return jwt.sign({ data: user_data }, JWT_SECRET, {
            expiresIn: '10m'
        });
    }
}