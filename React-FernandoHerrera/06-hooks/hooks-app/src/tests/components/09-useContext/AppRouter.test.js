import React from "react";
import { mount } from "enzyme";

import AppRouter from "../../../components/09-useContext/AppRouter";
import UserContext from "../../../components/09-useContext/UserContext";

describe("Tests on <AppRouter />", () => {
    const wrapper = mount(
        <UserContext.Provider value={{}}>
            <AppRouter />
        </UserContext.Provider>
    );
    test("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
