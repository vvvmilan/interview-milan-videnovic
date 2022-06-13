import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";

import './App.css';
import Header from "./www/Components/Wrapper/Header/Header";
import TaskList from "./www/Components/Wrapper/TaskList/TaskList";
import NewTodo from "./www/Components/Wrapper/NewTodo/NewTodo"

function App() {
    const BASE_URL = "https://wiv90yxntf.execute-api.eu-west-1.amazonaws.com/local"
    const [tasks, setTasks] = useState([]);
    const getTasks = () => {
        axios.get(BASE_URL)
            .then(result => {
                setTasks(result.data.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getTasks()
        }, [])

    const handleDelete = (id) => {
        axios.delete(`${BASE_URL}/${id}`)
            .then(console.log(`Task ${id} deleted`)
            )
            .catch(error => console.log(error))
        // setTasks(tasks.filter(task => task.id !== id));
    };

  return (
    <div className="App">
        <Header />
        <NewTodo
            tasks={tasks}
            setTasks={setTasks}
            getTasks={getTasks}
        />
        <TaskList
            tasks={tasks}
            handleDelete={handleDelete}
        />
    </div>
  );
}

export default App;
