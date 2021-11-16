import React from "react";
import { shallow, mount } from "enzyme";
import ToDoApp from "../../../components/08-useReducer/ToDoApp";

import { demoTodos } from "./fixtures/demoTodos";
import { act } from "@testing-library/react";

describe("Tests on ToDoApp", () => {

    const wrapper = shallow(<ToDoApp />);

    Storage.prototype.setItem = jest.fn();

    test("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should add a ToDo", () => {
        const wrapper = mount(<ToDoApp />);

        act(() => {
            wrapper.find("ToDoAdd").prop("handleAddTodo")(demoTodos[0]);
            wrapper.find("ToDoAdd").prop("handleAddTodo")(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('Todo App (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('should delete a ToDo', () => {

        wrapper.find("ToDoAdd").prop("handleAddTodo")(demoTodos[0]);
        wrapper.find("ToDoList").prop("handleDelete")(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
    })
    
});
