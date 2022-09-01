const { User } = require('../models');

const resolvers = {
    
    Query: {
        async getUsers() {
            return await User.find()
        }
    },

    Mutation : {
        async addUser(_, {email, username, password}, context) {
            return await User.create ({
                email,
                username,
                password
            });
        },
    }
}

module.exports = resolvers;