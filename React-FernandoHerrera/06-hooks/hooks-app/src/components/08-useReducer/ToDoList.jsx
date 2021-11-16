import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ toDos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {toDos.map((todo, index) => (
                <ToDoListItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            ))}
        </ul>
    );
};

export default ToDoList;
