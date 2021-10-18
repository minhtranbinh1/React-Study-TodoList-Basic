import React,{Fragment,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
const FormAdd = (props) =>{
    const addTodo = props.addTodo
    const ListTodos = props.ListTodos
    const [Todo,setTodo] = useState({})
    const changeTitleTodo = (e)=>{
        setTodo({
            id: ListTodos+1,
            title: e.target.value,
            complete: false
        })
    }
    return (
        <Fragment>
                <Form className="my-4">
                    <Form.Group>
                    <Form.Control type="text" onChange={changeTitleTodo} placeholder="Nhập tên công việc" name="todo" required/>
                    </Form.Group>
                    <div className="mt-4"></div>
                    <Button className="" onClick={addTodo.bind(this,Todo)} >Thêm công việc</Button>
                </Form>
        </Fragment>
    )
}
FormAdd.protoTypes ={
    ListTodos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,

}

export default FormAdd