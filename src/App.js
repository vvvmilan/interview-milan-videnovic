import axios from "axios";
import {useContext, useEffect, useState} from "react";

import './App.css';
import {BASE_URL} from "./config";
import Header from "./www/components/Wrapper/Header/Header";
import TaskList from "./www/components/Wrapper/TaskList/TaskList";
import NewTodo from "./www/components/Wrapper/NewTodo/NewTodo"
import ProgressBar from "./www/components/Wrapper/ProgressBar";
import { AppContext } from "./www/providers/AppProvider";

function App() {
    const { tasks, setTasks, isLoading, setIsLoading } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [striketrough, setStriketrough] = useState(null);

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
            setStriketrough({textDecoration: "line-through"})
        } else {
            setIsDone(false)
            setStriketrough(null);
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
        // console.log(id)
        // console.log(isEditing)
    }

    const [editTask, setEditTask] = useState('');


    const handleSubmitEditInput = (id) => {
        const patchTask = {
            "todo": editTask,
            // "todo": `PATCH done and hardcoded via TEXT FIELD222!`,
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
                isDone={isDone}
                handleCheckBox={handleCheckBox}
                striketrough={striketrough}
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
