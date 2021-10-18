import React,{Fragment,useState,useEffect} from 'react';
import TodoItem from './TodoItem'
import FormAdd from './Form';
import axios from 'axios';
const Todo = () =>{
    let [Todos,setTodo] = useState([])
    useEffect(() =>{
        const getListTodo = async () => {
            try {
                const listTodo = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
                const data = listTodo.data
                setTodo(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getListTodo();
    },[])
    const changeCompleteTodo = (id) => {
        const newTodo = Todos.map(todo =>{
             if(todo.id === id){
                 todo.complete = !todo.complete;
             }
             return todo;
         })
         setTodo(newTodo);
     }
     const removeTodo = (id,state) => {
         Todos.forEach(todo =>{
             if(todo.id === id && state === true){
                 const newTodo = Todos.filter(todoItem =>{
                     return todoItem.id !== id;
                 })
                return setTodo(newTodo)
             }
         })
     }
     const addTodo = (todo) => {
         Todos.forEach(todoItem =>{
             if(todo.title == todoItem.title) return setTodo([...Todos]);
             return setTodo ([...Todos,todo]);
         })


     }
    return (
    <Fragment>
        {Todos.map(Item=>{
            return <TodoItem key={Item.id} TodoItem={Item} changeComplete={changeCompleteTodo} removeTodo={removeTodo} />
        })}
        <FormAdd ListTodos={Todos} addTodo={addTodo} />
    </Fragment>
    )
}

//props type

export default Todo;