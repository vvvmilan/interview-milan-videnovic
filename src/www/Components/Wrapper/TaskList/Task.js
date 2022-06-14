import {styled} from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Paper from "@mui/material/Paper";
import "./Task.css";
import EditIcon from '@mui/icons-material/Edit';
import TextField from "@mui/material/TextField";
import CheckIcon from '@mui/icons-material/Check';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function Task({ task, handleDelete, handleEdit, isEditing }) {

    const taskDone = task.done
        ? {textDecoration: "line-through"}
        : null

    return (
        <div>
            <div className="task">
                <Item className="task">
                    {isEditing
                        ?
                        <TextField
                            label="edit task"
                            id="standard-size-normal"
                            defaultValue={task.todo}
                            variant="standard"
                        />
                        :
                        <div className="taskTitle" style={taskDone}>
                            <Checkbox {...label} />
                            {task.todo}
                        </div>
                    }
                    <div>
                        {isEditing
                            ? <CheckIcon onClick={() => isEditing=false}/>
                            : <EditIcon
                                onClick={handleEdit}
                            />
                        }
                        <DeleteForeverIcon
                            onClick={() => handleDelete(task.id)}
                        />
                    </div>
                </Item>
            </div>
        </div>
    );
}

export default Task;







