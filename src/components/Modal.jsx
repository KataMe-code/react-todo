import React, { memo } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core';

const Modal = (props) => {
    const { show, setShow, todos, completeDelete, index } = props;
    // console.log("modal re-render");
    // 削除確認対象タスク名
    const todoText = todos[index];
    const handleClose = () => {
        setShow(false)
    }

    if (show) {
        return (
            <Dialog
                open={show}
                onClose={handleClose}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <DialogTitle id="dialog-title">{"完了TODO削除"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">
                        {`${todoText} を完了TODOから本当に削除してよろしいでしょうか?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        completeDelete(index);
                        setShow(false);
                    }} variant="contained" color="secondary">Delete</Button>
                    <Button onClick={handleClose} variant="contained" color="default">Cancel</Button>
                </DialogActions>
            </Dialog>
        )
    } else {
        return null;
    }
}

export default memo(Modal)
