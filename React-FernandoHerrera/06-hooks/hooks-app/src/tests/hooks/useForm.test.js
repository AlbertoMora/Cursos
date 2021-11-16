import { renderHook, act } from "@testing-library/react-hooks";

import { useForm } from "../../hooks/useForm";

describe("Custom form hook tests", () => {
    const initialForm = {
        name: "Alberto",
        email: "alberto@mail.com",
    };
    const newValue = "Alonso";

    test("should return a default form", () => {
        const {
            result: {
                current: [formState, handleInputChange, reset],
            },
        } = renderHook(() => useForm(initialForm));

        expect(formState).toEqual(initialForm);
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");
    });

    test("should change the form name input value", () => {
        const {
            result,
            result: {
                current: [, handleInputChange],
            },
        } = renderHook(() => useForm(initialForm));

        act(() => {
            handleInputChange({ target: { name: "name", value: newValue } });
        });

        const [formState] = result.current;

        expect(formState.name).toBe(newValue);
    });

    test("should reset form values", () => {
        const {
            result,
            result: {
                current: [, handleInputChange, reset],
            },
        } = renderHook(() => useForm(initialForm));

        act(() => {
            handleInputChange({ target: { name: "name", value: newValue } });
            reset();
        });

        const [formState] = result.current;

        expect(formState).toEqual(initialForm);
    });
});
