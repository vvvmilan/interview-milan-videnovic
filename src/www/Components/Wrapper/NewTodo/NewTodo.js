import AddButton from "./AddButton";
import InputField from "./InputField";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './NewTodo.css';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    // color: theme.palette.text.secondary,
}));

function NewTodo(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }


    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <Grid container spacing={0}>
        //         <Grid item xs={10}>
        //             <Item>
        //                 <InputField />
        //             </Item>
        //         </Grid>
        //         <Grid item xs={2}>
        //             <Item>
        //                 <AddButton />
        //             </Item>
        //         </Grid>
        //     </Grid>
        // </Box>

        // <div className='newTodo'>
        //     <InputField />
        //     <AddButton />
        // </div>
        <form
            className='newTodo'
            onSubmit={handleSubmit}

        >
            <InputField />
            <AddButton />
        </form>
    );
}

export default NewTodo;