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

function TaskList(props) {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={1}>
                <Item>
                    <Task />
                </Item>
                <Item>
                    <Task />
                </Item>
                <Item>
                    <Task />
                </Item>
            </Stack>
        </Box>
    );
}

export default TaskList;





