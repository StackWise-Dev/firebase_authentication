import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    // ADD YOU APP AUTHENTICATION CREDENTIALS HERE
});


export const auth = getAuth(app);
export default app;
