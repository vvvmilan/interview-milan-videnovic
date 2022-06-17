import { createContext, useState } from "react";

const AppContext = createContext({
    tasks: [],
    setTasks: () => {},
    isLoading: true,
    setIsLoading: () => {},
})

const AppProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false)



    return (
        <AppContext.Provider
            value={{
                tasks,
                setTasks,
                isLoading,
                setIsLoading,
                isEditing,
                setIsEditing,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider

export { AppContext }
