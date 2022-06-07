import React from 'react';
import "./Task.css";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Task(props) {
    return (
        <div>
            <div className="task">
                <Checkbox {...label} />
                Lorem Task
            </div>
        </div>

    );
}

export default Task;







