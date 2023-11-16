import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
}

export const clinet = new Client();

clinet.setProject(appwriteConfig.projectId);
clinet.setEndpoint(appwriteConfig.url);

export const account = new Account(clinet);
export const databases = new Databases(clinet);
export const storage = new Storage(clinet);
export const avatar = new Avatars(clinet);