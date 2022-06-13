import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";

import './App.css';
import Header from "./www/Components/Wrapper/Header/Header";
import TaskList from "./www/Components/Wrapper/TaskList/TaskList";
import NewTodo from "./www/Components/Wrapper/NewTodo/NewTodo"

function App() {
    const BASE_URL = "https://wiv90yxntf.execute-api.eu-west-1.amazonaws.com/local"
    // const mockTasks = [
    //     {
    //         "id": "aD9STIEBCCeTujiJddMA",
    //         "created": "2022-06-10T06:34:40.518Z",
    //         "todo": "edited awesome todo!",
    //         "done": false
    //     },
    //     {
    //         "id": "UT-TRIEBCCeTujiJudO3",
    //         "created": "2022-05-05T00:09:17.670Z",
    //         "todo": "shopping time!",
    //         "done": true
    //     },
    //     {
    //         "id": "VT-TRIEBCCeTujiJudPU",
    //         "created": "2022-03-31T22:01:24.988Z",
    //         "todo": "Et veniam libero odio.",
    //         "done": false
    //     },
    // ]
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL)
            .then(result => {
                setTasks(result.data.data)
                console.log(result)
            })
            .catch(error => console.log(error))
        },
        [])

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };



  return (
    <div className="App">
        <Header />
        <NewTodo
            tasks={tasks}
            setTasks={setTasks}
        />
        <TaskList
            tasks={tasks}
            handleDelete={handleDelete}
        />
    </div>
  );
}

export default App;
