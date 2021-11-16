import React from "react";
import { useForm } from "../../hooks/useForm";

const ToDoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({ description: "" });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        handleAddTodo({
            id: new Date().getTime(),
            desc: description,
            done: false
        })

        reset();
    };

    return (
        <>
            <h4>Agregar toDo</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                    placeholder="Aprender..."
                    autoComplete="off"
                />
                <button type="submit" className="btn btn-outline-info mt-1 btn-block">
                    +
                </button>
            </form>
        </>
    );
};

export default ToDoAdd;
