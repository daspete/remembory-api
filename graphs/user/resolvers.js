export default {
    Query: {
        async Users(root, args, { UserProvider }){
            return await UserProvider.GetUsers()
        }
    },

    Mutation: {
        async RegisterUser(root, { data }, { pubSub, UserProvider, AuthProvider }){
            return await UserProvider.RegisterUser(data)
        }
    },

    User: {

    }
}