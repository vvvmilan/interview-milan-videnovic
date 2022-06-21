import { createContext, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../config";

const AppContext = createContext({
    tasks: [],
    setTasks: () => {},
    isLoading: true,
    setIsLoading: () => {},
    isEditing: false,
    setIsEditing: () => {},
    isDone: false,
    editTask: '',
    getTasks: () => {},
    handleCheckBox: () => {},
    handleDelete: () => {},
    handleEdit: () => {},
})

const AppProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const getTasks = () => {
        axios.get(BASE_URL)
            .then(result => {
                setTasks(result.data.data);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
    }

    const handleCheckBox = (id) => {
        setIsLoading(true)
        if(isDone === false) {
            setIsDone(true);
        } else {
            setIsDone(false)
        }
        axios.patch(`${BASE_URL}/${id}/change-status`)
            .then(() => {
                const newTasks = tasks.map(task => {
                    return task.id === id
                        ? {
                            id,
                            todo: task.todo,
                            done: !task.done,
                        }
                        : task
                })
                setTasks(newTasks)
                setIsLoading(false)
            })
            .catch(error => console.log(error))
    }

    const handleDelete = (id) => {
        setIsLoading(true)
        axios.delete(`${BASE_URL}/${id}`)
            .then(() => {
                console.log(`Task ${id} deleted`)
                setTasks(tasks.filter(task => task.id !== id));
                setIsLoading(false);
            })
            .catch(error => console.log(error))
    };

    const handleEdit = (id) => {
        setIsEditing(id);
    }

    return (
        <AppContext.Provider
            value={{
                tasks,
                setTasks,
                isLoading,
                setIsLoading,
                isEditing,
                setIsEditing,
                isDone,
                setIsDone,
                getTasks,
                handleCheckBox,
                handleDelete,
                handleEdit,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider

export { AppContext }
