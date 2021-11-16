import React, { useEffect, useReducer } from "react";

import "./styles.css";
import { todoReducer } from "./todoReducer";
import ToDoList from "./ToDoList";
import ToDoAdd from "./ToDoAdd";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

const ToDoApp = () => {
    const [toDos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(toDos));
    }, [toDos]);

    const handleDelete = (todoId) => {
        const deleteToDoAction = {
            type: "remove",
            payload: todoId,
        };
        dispatch(deleteToDoAction);
    };

    const handleToggle = (todoId) => {
        const toggleToDoAction = {
            type: "toggle",
            payload: todoId,
        };
        dispatch(toggleToDoAction);
    };

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: "add",
            payload: newTodo,
        });
    }

    return (
        <>
            <h1>Todo App ({toDos.filter((todo) => todo.done === false).length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ToDoList toDos={toDos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className="col-5">
                   <ToDoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </>
    );
};

export default ToDoApp;
