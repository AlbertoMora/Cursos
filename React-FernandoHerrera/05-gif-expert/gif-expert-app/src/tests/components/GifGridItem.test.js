import React from "react";
import { shallow } from "enzyme";

import GifGridItem from "../../components/GifGridItem";

describe("Render testing of GifGrid component", () => {
    const title = "Title";
    const img = "http://localhost:3000/favicon.ico";
    const wrapper = shallow(<GifGridItem title={title} url={img} />);

    test("should render the component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("should have a <p></p> with the title", () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    });
    test("should have the correct url and props attributes", () => {
        const image = wrapper.find("img");

        expect(image.prop("src")).toBe(img);
        expect(image.prop("alt")).toBe(title);
    });
    test("should have the className animate__backInLeft", () => {
        const expectedClass = "animate__backInLeft";
        const div = wrapper.find("div");

        expect(div.prop("className")).toContain(expectedClass);
    });
});
