import React, {useState} from 'react';
import Modal from './Modal';

export const ComplteTodos = (props) => {
    const { todos, onClickBack, completeDelete } = props;
    const [show, setShow] = useState(false);
    return (
        <div className="complete-area">
            <p className="title">完了TODO</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <div key={todo} className="list-row">
                            <li>{todo}</li>
                            <button onClick={() => onClickBack(index)}>戻す</button>
                            <button onClick={()=> setShow(true)}>削除</button>
                            <Modal show={show} setShow={setShow} todos={todos} completeDelete={completeDelete} index={index}/>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
