import React, { useState } from 'react';
import { InputTodo } from "./components/InputTodo"
import { IncompleteTodos } from "./components/InCompleteTodos"
import { ComplteTodos } from "./components/CompleteTodos"
import "./styles.css";
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const userStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

export const App = () => {
    const classes = userStyle();
    const [todoText, setTodoText] = useState();
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);
    const onChangeTodoText = (event) => {
        setTodoText(event.target.value);
    };

    const onClickAdd = () => {
        // alert(todoText);
        if (todoText === "" || todoText === undefined) return;
        const newTodo = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodo);
        setTodoText("");
    }

    const onClickDelete = (index) => {
        // alert(index);
        const newTodo = [...incompleteTodos];
        newTodo.splice(index, 1);
        setIncompleteTodos(newTodo);
    }

    const onClickComplete = (index) => {
        // alert(index);
        const newInCompleteTodo = [...incompleteTodos];
        newInCompleteTodo.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        setIncompleteTodos(newInCompleteTodo);
        setCompleteTodos(newCompleteTodos)
    }

    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newInCompleteTodo = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newInCompleteTodo);
    }

    const completeDelete = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);
        setCompleteTodos(newCompleteTodos)
    }
    const generate = (element) =>{
        return [0].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    // TODO: Material UI 導入
    return <>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <InputTodo todoText={todoText} onChange={onChangeTodoText} onClickAdd={onClickAdd} disabled={incompleteTodos.length >= 5} />
                    </Paper>
                </Grid>
                {incompleteTodos.length >= 5
                &&
                <Grid item xs={12}>
                    <Paper className={classes.paper} style={{ color: 'red' }}>
                        登録できるTODOは５個までです。
                    </Paper>
                </Grid>}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} generate={generate}/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <ComplteTodos todos={completeTodos} onClickBack={onClickBack} completeDelete={completeDelete} generate={generate}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    </>
}
