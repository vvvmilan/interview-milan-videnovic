import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import './NewTodo.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
}));

function NewTodo({ tasks, setTasks }) {{
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