import {useContext} from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { AppContext } from "../../providers/AppProvider";

import './NewTodo.css';
import {BASE_URL} from "../../config";

function NewTodo() {{
    const { tasks,
        setTasks,
        setIsLoading
    } = useContext(AppContext)

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const newTask = {
            "todo": e.target[0].value,
            "done": false
        }
        e.target[0].value.length
            ? axios.post(BASE_URL, newTask)
                .then((response) => {
                    console.log(response)
                    setTasks([
                        {
                            ...newTask,
                            id: response.data.id
                        },
                        ...tasks,
                        ])
                    setIsLoading(false);
                    }
                )
                .catch(error => console.log(error))
            : alert(`Please name your task!`)
        e.target[0].value = "";
    }

    return (
        <form
            className='newTodo'
            onSubmit={handleSubmit}
        >
            <TextField
                id="outlined-basic"
                label="Add new task"
                variant="outlined"
                className='inputTask'
            />
            <input type="submit"
                   value="ADD"
                   className="btnAdd"
            />
        </form>
    );
}}

export default NewTodo;