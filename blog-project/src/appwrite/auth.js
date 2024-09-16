// Import the Appwrite client library and any other necessary modules.
import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite";

// Create a new instance of the Appwrite client.
export class AuthService{//authentication related tasks, 2 properties client & account
    client = new Client();
    account;

// Set the endpoint and project ID for the client using the configuration values.
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
    }

// Create a new instance of the Account class, passing the client instance as a parameter.
    async CreateAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount){
                return this.login({email, password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }
    
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}



const authService = new AuthService();
export default authService