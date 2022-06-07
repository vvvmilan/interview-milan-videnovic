import TextField from '@mui/material/TextField';

function InputField(props) {
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Add new task"
                variant="outlined"
                className='inputTask'
            />
        </div>
    );
}

export default InputField;