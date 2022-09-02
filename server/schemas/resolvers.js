const {User} = require('../models');
const {signToken} = require('../auth');
const {ApolloError} = require('apollo-server-express');

const resolvers = {
    
    Query: {
        async getUsers(_, args, context) {
            if(!context.user) {
                throw new ApolloError('you are not authorized to do this, please login', 402);
            }
            return await User.find()
        }
    },

    Mutation : {
        async addUser(_, {email, username, password}, context) {
            try {
                const user = await User.create ({
                    email,
                    username,
                    password
                });

                const token = signToken(user);
                return{user, token};
            } catch(error){
                throw new ApolloError(error)
            }
        },
        async loginUser(_, { email, password }, context) {
            const user = await User.findOne({ email });
      
            if (!user) throw new ApolloError('Email not found in our database');
      
            if (!user.validatePass(password)) throw new ApolloError('That password is not correct');
      
            try {
                const token = signToken(user);
      
                return { user, token };
            } catch(error){
                throw new ApolloError(error);
            }
        },
        async deleteUser(_,{ email, password}, context) {
            try {
                const user = await User.delete({
                    email,
                    password
                });
                const token = signToken(user);
                return{user, token};
            }catch(error){
                throw new ApolloError(error)
            }
        }
    }
}

module.exports = resolvers;