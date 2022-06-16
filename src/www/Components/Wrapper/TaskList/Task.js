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

function Task({ task,
                  isDone,
                  handleCheckBox,
                  striketrough,
                  handleDelete, handleEdit, isEditing, handleSubmitEdit, handleSubmitEditInput,
                  handleChangeEditTask,

              }) {

    // isDone  true ? {textDecoration: "line-through"} : null


    const taskDone = task.done
        ? {textDecoration: "line-through"}
        : null

    // isDone === true ? console.log(isDone) : console.log('And');





    return (
        <div>
            <div className="task">
                <Item className="task">
                    {isEditing === task.id
                        ?
                            <TextField
                                label="edit task"
                                id="standard-size-normal"
                                defaultValue={task.todo}
                                variant="standard"

                                onChange={handleChangeEditTask}
                                onKeyPress={(e) => {
                                    // console.log(e.target.value)
                                    e.key === 'Enter' &&
                                    handleSubmitEdit(task.id)
                                    // handleSubmitEditInput(task.id)
                                    // console.log(e.key)
                                }
                                }
                                    // onSubmit={handleSubmitEdit}
                                // onSubmit={(e) => e.preventDefault()
                                    // console.log(e.target.value)}

                            />
                        :
                        <div className="taskTitle" style={striketrough}>
                            <Checkbox {...label} onClick={() => handleCheckBox(task.id)}/>
                            {task.todo}
                        </div>
                    }
                    <div>
                        {isEditing === task.id
                            ? <CheckIcon
                                className={`icon`}
                                 onClick={() => handleSubmitEdit(task.id)}
                                sx={{ color: '#575b88' }}
                            />
                            : <EditIcon
                                className={`icon`}
                                onClick={() => handleEdit(task.id)}
                                sx={{ color: '#575b88' }}
                            />
                        }
                        <DeleteForeverIcon
                            className={`icon`}
                            onClick={() => handleDelete(task.id)}
                            sx={{ color: '#575b88' }}
                        />
                    </div>
                </Item>
            </div>
        </div>
    );
}

export default Task;







