const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
}

export default conf

//The conf object is created to store the Appwrite configuration settings
//environment variables are variables that are set outside of the code, typically during the build or deployment process
//Creating a separate configuration object and exporting it as a default export provides a clean, flexible, and maintainable way to manage Appwrite configuration settings in the application.