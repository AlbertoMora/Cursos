import React from "react";
import { shallow } from "enzyme";
import ToDoList from "../../../components/08-useReducer/ToDoList";

import { demoTodos } from "./fixtures/demoTodos";

describe("Tests on <TodoList />", () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<ToDoList toDos={demoTodos} handleDelete={handleDelete} handleToggle={handleToggle} />);

    test("should render the component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should have demoTodos.length number of elements", () => {
        expect(wrapper.find("ToDoListItem").length).toBe(demoTodos.length);
    });
    test("should ToDoListItem children have the right properties", () => {
        const item = wrapper.find("ToDoListItem").at(0);

        expect(item.prop("handleDelete")).toEqual(expect.any(Function));
        expect(item.prop("handleToggle")).toEqual(expect.any(Function));
        expect(item.prop("todo")).toEqual(expect.any(Object));
        expect(item.prop("index")).toEqual(expect.any(Number));
    });
});
