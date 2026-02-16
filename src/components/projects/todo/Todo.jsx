import {TodoForm} from "./TodoForm";
import { TodoList} from "./TodoList";
import {TodoDateTime} from "./TodoDateTime";
import {TodoFooter} from "./TodoFooter";
import { getLocalStorageTodoData , setLocalStorageTodoData } from "./TodoLocalStorage";
import { useState, useEffect } from "react";
import "./Todo.css";
export const Todo =()=>{




const [task, setTask] = useState(() => getLocalStorageTodoData());

const [completedTask, setCompletedTask] = useState([]);



const handleFormSubmit =(inputValue) =>
{
 const {id , content , checked} = inputValue;
if(!content) return;

// if(task.includes(inputValue))return; 
const ifTodoContentMatched =task.find((curretask) => curretask.content === content );
if(ifTodoContentMatched) return; 
setTask((prevTask) => [ ...prevTask, {id, content, checked}]);
};

// add data todo to localstorage



useEffect(() => {
  setLocalStorageTodoData(task);
}, [task]);


const handleDelete = (deleteItem) =>
{
      const updatedTasks = task.filter((curtask) => curtask.content !== deleteItem);
    setTask(updatedTasks);
};

const handleLineThrough = (curretask) => {
  if (completedTask.includes(curretask)) {
    // remove line-through if already completed
    setCompletedTask(completedTask.filter((task) => task !== curretask));
  } else {
    // add line-through
    setCompletedTask([...completedTask, curretask]);
  }
};

const handleClearTodo = ( ) =>
{
    setTask([]);
}



    return(
<section className="todo-container">
    <header>
        <h1>Todo List</h1>
         < TodoDateTime/>
    </header>

    <TodoForm onAddTodo = {handleFormSubmit}/>
    <section className="myunorder-list">
         <ul>
            {
            task.map((curretask) => {
            return(
           <TodoList key={curretask.id} data={curretask.content} completedTask={completedTask} 
           onHandleDeleteTodo={handleDelete} onHandleLine={handleLineThrough} />
                 );
                })
            }
        </ul>
    </section>
    <section className="clear-btn" onClick={handleClearTodo}>Clear All</section>
<section className="developer">
<TodoFooter/>
</section>
</section>



    );
};