import React, { createContext, useState } from "react";

type AuthType = {
    user?: string;
    pwd?: string;
    token?: string;
};

type AuthContextType = {
    auth: AuthType;
    setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<AuthType>({});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;