import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

export const IncompleteTodos = (props) => {
    const { todos, onClickComplete, onClickDelete, generate } = props;
    return (
        <div>
            <p>未完了TODO</p>
            <List>
                {todos.map((todo, index) => {
                    return (
                        // 仮想DOMの再レンダリングのためにループ内で変化があるものを特定できるKeyを設定する
                        <div key={todo}>
                            {/* <li>{todo}</li>
                            <Button variant="contained" color="primary" onClick={() => onClickComplete(index)}>完了</Button>
                            <Button variant="contained" color="default" onClick={() => onClickDelete(index)}>削除</Button> */}
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
                                                <CheckBoxIcon onClick={() => onClickComplete(index)}/>
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete">
                                                <DeleteIcon onClick={() => onClickDelete(index)}/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                        </div>
                    )
                })}
                </List>
        </div>
    )
}
