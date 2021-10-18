import React,{Fragment} from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    const Todo = props.TodoItem;
    const changeCompleteTodo = props.changeComplete
    const removeTodo = props.removeTodo;
    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: Todo.complete ? 'line-through' :'none' ,
    }
    const deleteButtonStyle = {
        background: '#ff0000',
        color: '#fff',
        border:'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right',
    }
    return (
    <Fragment>
        <p style={todoItemStyle}>
            <input type="checkbox" onChange={changeCompleteTodo.bind(this,Todo.id)} checked={Todo.complete}/>
            {Todo.title}
            <Button style={deleteButtonStyle} onClick={removeTodo.bind(this,Todo.id,Todo.complete)}>Delete</Button> 
        </p>    

    </Fragment>
    )
}
TodoItem.propTypes = {
    TodoItem: PropTypes.object.isRequired,
    changeComplete: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
}


export default TodoItem;