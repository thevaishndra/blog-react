const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
console.log("Appwrite URL:", conf.appwriteUrl); // Debugging
console.log("Project ID:", conf.appwriteProjectId);
console.log(import.meta.env);
export default conf;

//The conf object is created to store the Appwrite configuration settings
//environment variables are variables that are set outside of the code, typically during the build or deployment process
//Creating a separate configuration object and exporting it as a default export provides a clean, flexible, and maintainable way to manage Appwrite configuration settings in the application.