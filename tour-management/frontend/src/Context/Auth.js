import {createContext, useEffect, useReducer} from "react";

const initial = {
    user:localStorage.getItem('user') !== undefined ? JSON.parse(
        localStorage.getItem('user')) : null,
    loading: false,
    error: null,
};

export const AuthСontext = createContext(initial);
const Authreducer = (state, action) => {
    switch (action.type) {
        case "Start_Login":
            return{
                user:null,
                loading: true,
                error: null,
            }
        case 'Success_Login' :
            return {
                user:action.payload,
                loading: false,
                error: null,
            }
        case 'Fail_Login' :
            return {
                user:null,
                loading: false,
                error: action.payload,
            }
        case 'Success_Register' :
            return {
                user:null,
                loading: false,
                error: null,
            }
        case 'Log_Out' :
            return {
                user:null,
                loading: false,
                error: null,
            }
    default: return state
}
}
export const AuthСontextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Authreducer, initial);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthСontext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthСontext.Provider>
    );
}