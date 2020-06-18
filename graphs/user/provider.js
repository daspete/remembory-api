import DataProvider from '~~/services/mongodb/dataprovider'

export default class UserProvider {
    users = []

    constructor(){
        this.context = null

        this.dataprovider = new DataProvider({
            collection: 'users'
        })

        console.log('registered userprovider')
    }

    SetContext(context){
        this.context = context
    }

    async GetUserById(id){
        return await this.dataprovider.FindById(id)
    }

    async GetUsers(){
        return await this.dataprovider.Find()
    }

    async RegisterUser(user){
        user = await this.dataprovider.Create(user)
        
        this.users.push(user)

        return user
    }

}