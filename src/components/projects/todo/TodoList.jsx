import { MdCheck, MdDeleteForever } from "react-icons/md"

export const TodoList = ({data, completedTask, onHandleDeleteTodo, onHandleLine}) =>
{
    return (
            <li className="todo-item" >
                    <span style={{textDecoration: completedTask.includes(data) ? "line-through" : "none" }}>
                    {data}
                 </span>

                <button className="check-btn" onClick={() => onHandleLine(data)} > <MdCheck/></button>
                    <button className="dlete-btn" onClick={() => onHandleDeleteTodo(data)}  ><MdDeleteForever/> </button>
                 </li>
    )
}