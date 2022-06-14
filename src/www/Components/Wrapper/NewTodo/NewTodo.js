import { styled } from '@mui/material/styles';
import axios from "axios";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import './NewTodo.css';
import {BASE_URL} from "../../../../config";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
}));

function NewTodo({ tasks, setTasks, getTasks }) {{
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            "todo": e.target[0].value,
            "done": true
        }
        e.target[0].value.length
            ? axios.post(BASE_URL, newTask)
                .then(() => {
                    setTasks([
                        ...tasks,
                        newTask
                        ])
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
            {/*<Button*/}
            {/*    variant="text"*/}
            {/*    className="btnAdd"*/}
            {/*    onClick={handleSubmit}*/}
            {/*>*/}
            {/*    Add*/}
            {/*</Button>*/}
        </form>
    );
}

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, {
            todo: e.target[0].value,
            done: false,
        }])
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
            <Button
                variant="text"
                className="btnAdd"
            >
                Add
            </Button>
        </form>
    );
}

export default NewTodo;