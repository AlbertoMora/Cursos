import React from "react";
import { shallow } from "enzyme";
import TodoListItem from "../../../components/08-useReducer/ToDoListItem";

import { demoTodos } from "./fixtures/demoTodos";

describe("Test on <ToDoListItem />", () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    let wrapper = shallow(
        <TodoListItem todo={demoTodos[0]} index={0} handleDelete={handleDelete} handleToggle={handleToggle} />
    );

    beforeEach(() => {
        wrapper = shallow(
            <TodoListItem todo={demoTodos[0]} index={0} handleDelete={handleDelete} handleToggle={handleToggle} />
        );
    });

    test("should render the default component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should call handleDelete function", () => {
        wrapper.find("button").at(0).simulate("click");
        expect(handleDelete).toBeCalledWith(demoTodos[0].id);
    });

    test("should call handleToggle function", () => {
        wrapper.find("p").at(0).simulate("click");
        expect(handleToggle).toBeCalledWith(demoTodos[0].id);
    });

    test("should show the correct information at paragraph tag", () => {
        const value = wrapper.find("p").text().trim();
        const expectedValue = `1. ${demoTodos[0].desc}`;
        expect(value).toBe(expectedValue);
    });

    test('should have "complete" class if toDo.done is true', () => {

        const toDo = {...demoTodos[0], done: true};

        wrapper = shallow(
            <TodoListItem todo={toDo} index={0} handleDelete={handleDelete} handleToggle={handleToggle} />
        );
        
        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    })
    
});
