import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf';

class AuthService {
  client = new Client();
  account;
  
  constructor() {
    this.client
    .setEndpoint(conf.appwriteUrl) // Your API Endpoint
    .setProject(conf.appwriteProjectId);               // Your project ID
    this.account = new Account(this.client);
  }

  async createAccount({email, password, name}) {
    try {
      const userData = await this.account.create(ID.unique(), email, password, name);
      if(userData) {
        return this.login({email, password});
      } else {
        return userData;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({email, password})  {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: Error", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: Logout :: Error", error);
    }
  }
}

const authService = new AuthService();

export default authService   