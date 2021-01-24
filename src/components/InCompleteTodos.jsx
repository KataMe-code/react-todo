import React from 'react';

export const IncompleteTodos = (props) => {
    const { todos, onClickComplete, onClickDelete } = props;
    return (
        <div className="inComplete-area">
            <p className="title">未完了のTODO</p>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        // 仮想DOMの再レンダリングのためにループ内で変化があるものを特定できるKeyを設定する
                        <div key={todo} className="list-row">
                            <li>{todo}</li>
                            <button onClick={() => onClickComplete(index)}>完了</button>
                            <button onClick={() => onClickDelete(index)}>削除</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
