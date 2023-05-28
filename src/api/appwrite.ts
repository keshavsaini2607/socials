import { Client as Appwrite, Databases, Account } from "appwrite";
import { Server } from "../utils/config";

let api = {
    sdk: null as null | { account: Account; database: Databases },

    provider: () => {
        if(api.sdk) {
            return api.sdk;
        }

        let appwrite = new Appwrite();
        appwrite.setEndpoint(Server.endpoint!).setProject(Server.project!);
        const account = new Account(appwrite);
        const database = new Databases(appwrite);

        api.sdk = { account, database };
        return api.sdk;
    },

    createAccount: (email: string, password: string, name: string) => {
        return api.provider().account.create("unique()", email, password, name);
    },

    getAccount: () => {
        let account = api.provider().account;
        return account.get();
    },

    createSession: (email: string, password: string) => {
        return api.provider().account.createEmailSession(email, password);
    },

    deleteCurrentSession: () => {
        return api.provider().account.deleteSession("current");
    },
}

export default api;