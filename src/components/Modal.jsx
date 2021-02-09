import React,{memo} from 'react';

const Modal = (props) => {
    const { show, setShow, todos, completeDelete, index } = props;
    // console.log("modal re-render");
    // 削除確認対象タスク名
    const todoText = todos[index];

    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const contentStyle = {
        zIndex: '2',
        width: '50%',
        padding: '1em',
        background: '#fff'
    }
    if (show) {
        return (
            <div style={overlayStyle} onClick={()=> setShow(false)}>
                <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
                    <p>{`${todoText} を完了TODOから本当に削除してよろしいでしょうか?`}</p>
                    <button onClick={()=> {
                        completeDelete(index);
                        setShow(false);
                    }}>削除</button>
                    <p><button onClick={() => setShow(false)}>close</button></p>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default memo(Modal)
