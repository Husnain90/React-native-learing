
import {  createContext, useContext, useState } from "react";

export enum Role {
  ADMIN = "admin",
  User = "user",
}

type authStateType = {
  authenticated: boolean | null;
  userName: string | null;
  role: Role | null;
};
interface AuthProps {
  authState: authStateType;
  onLogin: (userName: string, password: string) => void;
  onLogout: () => void;
}

 const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<authStateType>({
    authenticated: false,
    userName: null,
    role: null,
  });
  const login =(userName :string,password:string)=>{
    if(userName === 'admin' && password==="admin"){
        setAuthState({
            authenticated:true,
            userName:userName,
            role: Role.ADMIN
        })
    }
    else if (userName === "user" && password === "user") {
      setAuthState({
        authenticated: true,
        userName: userName,
        role: Role.User,
      });
    } else {
        alert("inavalid username and password")
    }
  }
   const logout = async ()=>{
    setAuthState({
        authenticated:false,
        userName:null,
        role:null
    })
   }
   const value ={
    onLogin :login ,
    onLogout :logout,
    authState
   }
   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
