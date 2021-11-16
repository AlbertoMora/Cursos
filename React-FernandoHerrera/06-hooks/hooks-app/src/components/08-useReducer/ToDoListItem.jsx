import React from "react";

const ToDoListItem = ({todo, index, handleToggle, handleDelete}) => {
    return (
        <li key={todo.id} className="list-group-item">
            <p onClick={() => handleToggle(todo.id)} className={`text-center ${todo.done && "complete"}`}>
                {index + 1}. {todo.desc}
            </p>
            <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
                X
            </button>
        </li>
    );
};

export default ToDoListItem;
