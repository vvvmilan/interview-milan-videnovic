import { createContext, useState } from "react";

const AppContext = createContext({
    tasks: [],
    setTasks: () => {},
})

const AppProvider = ({ children }) => {
    const logMe = () => console.log('Logged from the provider')
    const [tasks, setTasks] = useState([]);

    return (
        <AppContext.Provider
            value={{
                logMe,
                tasks,
                setTasks,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider

export { AppContext }
