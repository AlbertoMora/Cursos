import React from "react";
import { shallow } from "enzyme";

import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Tests on <MultipleCustomHooks />", () => {
    beforeEach(() => {
        useCounter.mockReturnValue([10, () => {}]);
    });

    test("should render correctly", () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    });

    test("should show API information", () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: "Alberto",
                    quote: "Hola Mundo",
                },
            ],
            loading: false,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find(".alert").exists()).toBe(false);
        expect(wrapper.find(".quote-text").text().trim()).toBe("Hola Mundo");
        expect(wrapper.find("footer").text().trim()).toBe("Alberto");
    });
});
