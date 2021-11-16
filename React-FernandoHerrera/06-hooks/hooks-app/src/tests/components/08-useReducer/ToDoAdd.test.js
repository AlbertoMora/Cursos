import React from "react";
import { shallow } from "enzyme";
import ToDoAdd from "../../../components/08-useReducer/ToDoAdd";

describe("Tests on <ToDoAdd />", () => {
    const handleAddToDo = jest.fn();
    const wrapper = shallow(<ToDoAdd handleAddTodo={handleAddToDo} />);

    test("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("should not call AddToDo handler", () => {
        const formSubmit = wrapper.find("form").prop("onSubmit");
        formSubmit({ preventDefault() {} });

        expect(handleAddToDo).toBeCalledTimes(0);
    });

    test("should call AddToDo handler", () => {
        const value = "Aprender React";
        wrapper.find("input").simulate("change", {
            target: {
                value,
                name: "description",
            },
        });

        const formSubmit = wrapper.find("form").prop("onSubmit");
        formSubmit({ preventDefault() {} });

        expect(handleAddToDo).toBeCalled();
        expect(handleAddToDo).toBeCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });

        expect(wrapper.find('input').prop('value')).toBe("");
    });
});
