import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from "react";
import { shallow } from "enzyme";

describe("Testing React components", () => {
    test('should show <PrimeraApp /> correctly"', () => {
        const saludo = "Hola bro";
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });
    test("should shown the subtitle send by props", () => {
        
        const saludo = "Hola bro";
        const subtitulo = "Este es un subtítulo";
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);

    });

});
