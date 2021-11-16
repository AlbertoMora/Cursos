import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test on AddCategory component", () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    const e = {
        target: {
            value: "This is my value",
        },
    };
    const simulateInputChange = () => {
        const input = wrapper.find("input");
        input.simulate("change", e);
        const p = wrapper.find("p").text().trim();
        expect(p).toBe(e.target.value);
    };

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test("should render the element correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("should change input text", () => {
        simulateInputChange();
    });
    test("should not post info on submit when input is blank", () => {
        wrapper.find("form").simulate("submit", { preventDefault: () => {} });

        expect(setCategories).not.toHaveBeenCalled();
    });
    test("should call func setCategories and clean input text", () => {
        simulateInputChange();
        wrapper.find("form").simulate("submit", { preventDefault: () => {} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        const value = wrapper.find("input").prop("value");
        expect(value).toBe("");
    });
});
