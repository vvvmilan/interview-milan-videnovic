import { useContext } from 'react';
import Task from "./Task";

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { AppContext } from "../../../providers/AppProvider";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function TaskList({
                      handleCheckBox,
                      handleDelete,
                      handleEdit,
                      isEditing,
                      setIsEditing,



}) {
    const { tasks } = useContext(AppContext)
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={1}>
                {
                    tasks.map((task) =>
                        <Task
                            task={task}
                            key={task.id}
                            handleCheckBox={handleCheckBox}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                        />)
                }
            </Stack>
        </Box>
    );
}

export default TaskList;





