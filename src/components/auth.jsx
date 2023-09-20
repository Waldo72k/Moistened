import { auth } from "../config/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"

export const Auth = () => {
    return(
        <div>
            <input placeholder="Email..."/>
            <input placeholder="Psswrd..."/>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">                
                SignIn
            </button>
        </div>
    );
};