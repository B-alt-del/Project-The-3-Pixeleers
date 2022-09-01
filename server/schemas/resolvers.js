const { User } = require('../models');

const resolvers = {
    
    Query: {
        async getUsers() {
            return await User.find()
        }
    },

    Mutation : {
        async addUser(_, {email, password}, context) {
            return await User.create ({
                email,
                password
            });
        },
    }
}

module.exports = resolvers;