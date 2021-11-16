import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Expert App tests", () => {
    test("should match component snapshot", () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test("should display a list of categories", () => {
        const categories = ["Dragon Ball", "Genshin Impact"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    });
});
