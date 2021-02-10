import React, { useState } from 'react';
import Modal from './Modal';
import ReplayIcon from '@material-ui/icons/Replay';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';


export const ComplteTodos = (props) => {
    const { todos, onClickBack, completeDelete, generate } = props;
    const [show, setShow] = useState(false);
    return (
        <div>
            <p>完了TODO</p>
            <List>
                {todos.map((todo, index) => {
                    return (
                        <div key={todo} className="list-row">
                            {/* <li>{todo}</li>
                            <Button variant="contained" color="primary" onClick={() => onClickBack(index)}>戻す</Button>
                            <Button onClick={() => setShow(true)}>削除</Button> */}
                            {generate(
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CheckBoxOutlineBlankIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={todo} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="complete">
                                            <ReplayIcon onClick={() => onClickBack(index)} />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon onClick={() => setShow(true)} />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )}
                            <Modal show={show} setShow={setShow} todos={todos} completeDelete={completeDelete} index={index} />
                        </div>
                    )
                })}
            </List>
        </div>
    )
}
