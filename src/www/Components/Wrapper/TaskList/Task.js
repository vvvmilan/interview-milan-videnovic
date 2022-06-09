import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import "./Task.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Task(props) {
    const [task, setTask] = useState(`Lorem ipsum`);

    return (
        <div>
            <div className="task">
                <Checkbox {...label} />
                {task}
            </div>
        </div>

    );
}

export default Task;







