import { useContext } from "react";

import {styled} from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Paper from "@mui/material/Paper";
import "./Task.css";
import EditIcon from '@mui/icons-material/Edit';
import TextField from "@mui/material/TextField";
import CheckIcon from '@mui/icons-material/Check';
import axios from "axios";
import {BASE_URL} from "../../../../config";
import {useState} from "react";

import { AppContext } from "../../../providers/AppProvider";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function Task({
                  task,
                  handleCheckBox,
                  handleDelete,
                  handleEdit,
                  isEditing,
                  setIsEditing,
              }) {

    const {
        tasks,
        setTasks,
        setIsLoading,
    } = useContext(AppContext)

    const taskDone = task.done
        ? {textDecoration: "line-through"}
        : null

    const handleSubmitEdit = (id, value) => {
        setIsLoading(true);
        console.log(value)
        const patchTask = {
            todo: value
        }
        axios.patch(`${BASE_URL}/${id}`, patchTask)
            .then(() => {
                const newTasks = tasks.map(task => {
                    return task.id === id
                        ? {
                            id,
                            todo: value,
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

    const [newTaskInputValue, setNewTaskInputValue] = useState();
    const handleNewTaskInputValue = (e) => {
        setNewTaskInputValue(e.target.value)
    }

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
                                onChange={handleNewTaskInputValue}
                                onKeyPress={(e) => {
                                    e.key === 'Enter' &&
                                    handleSubmitEdit(task.id, e.target.value)
                                }
                                }
                            />
                        :
                        <div className="taskTitle" style={taskDone}>
                            <Checkbox {...label}
                                      onClick={() => handleCheckBox(task.id)}
                                      checked={task.done}
                            />
                            {task.todo}
                        </div>
                    }
                    <div>
                        {isEditing === task.id
                            ? <CheckIcon
                                className={`icon`}
                                 onClick={() => handleSubmitEdit(task.id, newTaskInputValue)}
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







