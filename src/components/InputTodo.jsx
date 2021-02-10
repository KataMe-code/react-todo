import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
        },
    },
}));

export const InputTodo = (props) => {
    const classes = useStyles();
    const { todoText, onChange, onClickAdd, disabled } = props;
    return ([
        <div className={classes.root}>
            <form noValidate autoComplete="off">
                <TextField disabled={disabled} id="outlined-basic" label="TODO" value={todoText} onChange={onChange} />
                <Button variant="contained" color="primary" disabled={disabled} onClick={onClickAdd}>追加</Button>
            </form>
        </div>
    ])
}
