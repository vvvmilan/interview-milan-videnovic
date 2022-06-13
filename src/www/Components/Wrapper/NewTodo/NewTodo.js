import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import './NewTodo.css';
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
}));

function NewTodo({ tasks, setTasks, getTasks }) {{
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target[0].value.length
            ? axios.post("https://wiv90yxntf.execute-api.eu-west-1.amazonaws.com/local", {
                "todo": e.target[0].value,
                "done": true
            })
                .then(getTasks()
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