import React from "react";
import { shallow } from "enzyme";

import ReactExampleRef from "../../../components/04-useRef/ReactExampleRef";

describe("Test on <ReactExampleRef />", () => {
    const wrapper = shallow(<ReactExampleRef />);

    test("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should show component <MultipleCustomHooks />", () => {
        wrapper.find("button").at(0).simulate("click");

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});
