import React, { useState } from 'react';
import { InputTodo } from "./components/InputTodo"
import { IncompleteTodos } from "./components/InCompleteTodos"
import { ComplteTodos } from "./components/CompleteTodos"
import "./styles.css";

export const App = () => {
    const [todoText, setTodoText] = useState();
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);
    const onChangeTodoText = (event) => {
        setTodoText(event.target.value);
    }

    const onClickAdd = () => {
        // alert(todoText);
        if (todoText === "") return;
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

    // コンポーネント(HTML)
    return <>
        <InputTodo todoText={todoText} onChange={onChangeTodoText} onClickAdd={onClickAdd} disabled = {incompleteTodos.length >= 5} />
        {incompleteTodos.length >= 5 && <p style={{ color: 'red' }}>登録できるTODOは５個までです。</p>}

        <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
        <ComplteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
}
