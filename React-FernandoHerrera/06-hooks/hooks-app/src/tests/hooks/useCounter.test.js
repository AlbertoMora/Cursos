import { renderHook, act } from "@testing-library/react-hooks";

import { useCounter } from "../../hooks/useCounter";

describe("useCounter Tests", () => {
    test("should return default values", () => {
        const {
            result: {
                current: [counter, increment, decrement, reset],
            },
        } = renderHook(() => useCounter());

        expect(counter).toBe(10);
        expect(typeof increment).toBe("function");
        expect(typeof decrement).toBe("function");
        expect(typeof reset).toBe("function");
    });

    test("should return the new value", () => {
        const {
            result: {
                current: [counter],
            },
        } = renderHook(() => useCounter(100));

        expect(counter).toBe(100);
    });

    test("should increment counter by 1", () => {
        const {
            result,
            result: {
                current: [, increment],
            },
        } = renderHook(() => useCounter(100));

        act(() => {
            increment();
        });

        const [counter] = result.current;

        expect(counter).toBe(101);
    });
    test("should decrement counter by 1", () => {
        const {
            result,
            result: {
                current: [, , decrement],
            },
        } = renderHook(() => useCounter(100));

        act(() => {
            decrement();
        });

        const [counter] = result.current;

        expect(counter).toBe(99);
    });
    test("should reset the value to the default value", () => {
        const {
            result,
            result: {
                current: [, increment, , reset],
            },
        } = renderHook(() => useCounter(100));

        act(() => {
            increment();
            reset();
        });

        const [counter] = result.current;

        expect(counter).toBe(100);
    });
});
