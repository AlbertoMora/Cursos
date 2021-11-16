import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "./fixtures/demoTodos";

describe("Test on todoReducer", () => {
    test("should return the default state", () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });
    test("should add a toDo", () => {
        const action = {
            type: "add",
            payload: {
                id: 3,
                desc: "Test",
                done: false,
            },
        };

        const state = todoReducer(demoTodos, action);
        const expectedState = [...demoTodos, action.payload];

        expect(state.length).toBe(3);
        expect(state).toEqual(expectedState);
    });
    test("should remove a toDo", () => {
        const action = {
            type: "remove",
            payload: 2
        };

        const state = todoReducer(demoTodos, action);
        const expectedState = demoTodos.filter(todo => todo.id !== 2);

        expect(state.length).toBe(1);
        expect(state).toEqual(expectedState);

    });
    test("should toggle the 'done' property of a toDo", () => {
        const action = {
            type: "toggle",
            payload: 2
        };

        const state = todoReducer(demoTodos, action);

        expect(state.find(todo => todo.id === 2).done).toBe(true);
        expect(state[0]).toEqual(demoTodos[0]);

    });
});
