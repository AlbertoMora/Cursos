import { mount } from "enzyme";
import React from "react";

import LoginScreen from ".../../../components/09-useContext/LoginScreen";
import UserContext from "../../../components/09-useContext/UserContext";

describe("Tests on <LoginScreen />", () => {
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>
    );
    test("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should run setUser with the expected arguments', () => {
        wrapper.find('button').simulate('click');

        const expectedArguments = {
            id: 1234,
            name: "Alberto",
            email: "mail@alberto.com",
        };

        expect(setUser).toBeCalledWith(expectedArguments);
    })
    
});
