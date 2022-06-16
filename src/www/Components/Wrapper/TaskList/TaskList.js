// import React from 'react';
import Task from "./Task";

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function TaskList({
                      tasks,
                      isDone,
                      handleCheckBox,
                      striketrough,
                      handleDelete,
                      handleEdit, isEditing, handleSubmitEdit,
                      handleSubmitEditInput,
                      handleChangeEditTask,

}) {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={1}>
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            task={task}
                            isDone={isDone}
                            handleCheckBox={handleCheckBox}
                            striketrough={striketrough}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            isEditing={isEditing}
                            handleSubmitEdit={handleSubmitEdit}

                            handleSubmitEditInput={handleSubmitEditInput}
                            handleChangeEditTask={handleChangeEditTask}

                        />)
                }
            </Stack>
        </Box>
    );
}

export default TaskList;





