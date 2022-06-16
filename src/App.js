import axios from "axios";
import {useEffect, useState} from "react";

import './App.css';
import {BASE_URL} from "./config";
import Header from "./www/Components/Wrapper/Header/Header";
import TaskList from "./www/Components/Wrapper/TaskList/TaskList";
import NewTodo from "./www/Components/Wrapper/NewTodo/NewTodo"
import ProgressBar from "./www/Components/Wrapper/ProgressBar";

function App() {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
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
        axios.delete(`${BASE_URL}/${id}`)
            .then(() => {
                console.log(`Task ${id} deleted`)
                setTasks(tasks.filter(task => task.id !== id));
            })
            .catch(error => console.log(error))
    };

    const handleCheckBox = (id) => {
        setIsLoading(true)
        const checkTask = {
            "done": true,
        }

        if(isDone === false) {
            setIsDone(true);
            setStriketrough({textDecoration: "line-through"})
        } else {
            setIsDone(false)
            setStriketrough(null);
        }
        axios.patch(`${BASE_URL}/${id}`, checkTask)
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


        // isDone === false
        //     ? )
        // console.log(isDone)
    }


    const handleEdit = (id) => {
        setIsEditing(id);
        console.log(id)
        console.log(isEditing)
    }
    const handleSubmitEdit = (id) => {
        if(editTask) {
            setIsLoading(true);
            const patchTask = {
                "todo": editTask,
            }
            axios.patch(`${BASE_URL}/${id}`, patchTask)
                .then(() => {
                    const newTasks = tasks.map(task => {
                        return task.id === id
                            ? {
                                id,
                                todo: editTask,
                                done: task.done,
                            }
                            : task
                    })
                    setTasks(newTasks);
                    setIsLoading(false)
                })
                .catch(error => console.log(error))
            setIsEditing(false);
        }
    }

    const [editTask, setEditTask] = useState('');
    const handleChangeEditTask = (e) => {
        setEditTask(e.target.value)
        console.log(editTask)
    }

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
        <NewTodo
            tasks={tasks}
            setTasks={setTasks}
            getTasks={getTasks}
        />
        {isLoading && <ProgressBar />}
        <TaskList
            tasks={tasks}
            isDone={isDone}
            handleCheckBox={handleCheckBox}
            striketrough={striketrough}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            isEditing={isEditing}
            handleSubmitEdit={handleSubmitEdit}
            handleSubmitEditInput={handleSubmitEditInput}
            handleChangeEditTask={handleChangeEditTask}

        />
    </div>
  );
}

export default App;
