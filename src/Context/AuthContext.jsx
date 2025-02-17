// guardar globalmente un estado si estamos autentificados o no
// decimos autenficado a cualquier usuario que tenga access-token cargado en el local/sessionStorage


import { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const access_token = sessionStorage.getItem('access_token')

    const [isAuthenticatedUser, setIsAuthenticatedUSer] = useState(
        Boolean(access_token)
    )
    useEffect(
        () => {
            const access_token = sessionStorage.getItem('access_token')
            if (access_token) {
                setIsAuthenticatedUSer(true)
            }
        },
        []
    )


    const logout = () => {
        sessionStorage.removeItem('access_token')
        setIsAuthenticatedUSer(false)
    }

    return (
        <AuthContext.Provider value={{
            logout,
            isAuthenticatedUser
        }} >
            { children }      
        </AuthContext.Provider >
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}

