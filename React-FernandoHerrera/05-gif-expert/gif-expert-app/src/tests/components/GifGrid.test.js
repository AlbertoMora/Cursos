import React from "react";
import { shallow } from "enzyme";

import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test on GifGrid", () => {
    const category = "Goku";

    test("should match snapshot", () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });
    test("should show items when images are loaded", () => {
        const gifs = [
            {
                id: "ABC",
                url: "https://cnd.images.com/as.jpg",
                title: "Anything",
            },
            {
                id: "123",
                url: "https://cnd.images.com/as.jpg",
                title: "Anything",
            },
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    });
});
