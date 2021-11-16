import React from "react";
import { shallow } from "enzyme";

import HooksApp from "../HooksApp";

describe("Test over HooksApp functionality", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<HooksApp />);
        expect(wrapper).toMatchSnapshot();
    });
});
