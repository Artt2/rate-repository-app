//import { createContext } from 'react';  //we are not creating a new context
import { useContext } from 'react'; 

//const AuthStorageContext = createContext();
import AuthStorageContext from '../contexts/AuthStorageContext';

export const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default AuthStorageContext;

/*
  The materials show that a new context should be created here...
  However, app.js uses AuthStorageContext from /contexts/AuthStorageContext,
  so using it here solved the issue of "authStorage.useAccessToken undefined" 
  in useSignIn.js, where this file is being imported and used.
*/