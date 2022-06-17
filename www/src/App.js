import axios from "axios";
import {useContext, useEffect, useState} from "react";
import { AppContext } from "./providers/AppProvider";

import './App.css';
import {BASE_URL} from "./config";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import NewTodo from "./components/NewTodo/NewTodo"
import ProgressBar from "./components/ProgressBar";

function App() {
    const {
        tasks,
        setTasks,
        isLoading,
        setIsLoading,
        isEditing,
        setIsEditing,
        isDone,
        setIsDone,
    } = useContext(AppContext);

    const getTasks = () => {
        axios.get(BASE_URL)
            .then(result => {
                setTasks(result.data.data);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getTasks()
        }, [])

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

    const handleEdit = (id) => {
        setIsEditing(id);
    }

    const [editTask, setEditTask] = useState('');

    const handleSubmitEditInput = (id) => {
        const patchTask = {
            "todo": editTask,
        }
        axios.patch(`${BASE_URL}/${id}`, patchTask)
            .then()
            .catch(error => console.log(error))
        setIsEditing(false);
    }

    return (
        <div className="App">
            <Header />
            <NewTodo/>
            {isLoading && <ProgressBar />}
            <TaskList
                // isDone={isDone}
                handleCheckBox={handleCheckBox}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                isEditing={isEditing}
                handleSubmitEditInput={handleSubmitEditInput}
                setIsLoading={setIsLoading}
                setIsEditing={setIsEditing}
            />
        </div>
  );
}

export default App;
