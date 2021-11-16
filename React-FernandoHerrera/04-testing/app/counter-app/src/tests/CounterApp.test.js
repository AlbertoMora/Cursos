import CounterApp from "../CounterApp";
import React from "react";
import { shallow } from "enzyme";

describe("Test of CounterApp basics", () => {
    const wrapper = shallow(<CounterApp />);

    test("should match snapshot using default values", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should show a default value of 100", () => {
        const defValue = 100;
        const wrapper = shallow(<CounterApp value={defValue} />);

        const value = wrapper.find("h2").text();

        expect(value).toBe(defValue.toString());
    });
});

describe("Test of clicking events", () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });
    test("should increase counter value + 1", () => {
        wrapper.find("button").at(0).simulate("click");
        const counterText = wrapper.find("h2").text();

        expect(counterText).toBe("1");
    });

    test("should decrease counter value - 1", () => {
        wrapper.find("button").at(2).simulate("click");
        const counterText = wrapper.find("h2").text();

        expect(counterText).toBe("-1");
    });

    test("should set value to default value", () => {
        const defValue = 100;
        const wrapper = shallow(<CounterApp value={defValue} />);
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");
        const counterText = wrapper.find("h2").text();

        expect(counterText).toBe(defValue.toString());
    });
});
