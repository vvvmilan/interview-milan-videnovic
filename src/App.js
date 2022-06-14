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

    const handleEdit = () => {
        setIsEditing(true);
        console.log()
        console.log(isEditing)
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
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            isEditing={isEditing}
        />
    </div>
  );
}

export default App;
