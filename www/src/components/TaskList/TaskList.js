import { useContext } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { AppContext } from "../../providers/AppProvider";
import Task from "./Task";

function TaskList() {
    const { tasks } = useContext(AppContext)
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={1}>
                {
                    tasks.map((task) =>
                        <Task
                            task={task}
                            key={task.id}
                        />)
                }
            </Stack>
        </Box>
    );
}

export default TaskList;





