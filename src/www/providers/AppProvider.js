import { createContext } from "react";

const AppContext = createContext({})

const AppProvider = ({ children }) => {
    const logMe = () => console.log('Logged from the provider')

    return (
        <AppContext.Provider
            value={{
                logMe,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider

export { AppContext }
