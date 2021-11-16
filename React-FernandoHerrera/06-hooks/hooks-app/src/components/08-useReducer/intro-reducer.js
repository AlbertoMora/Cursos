const initialState = [
    {
        id: 1,
        todo: "Comprar Videojuegos",
        done: false,
    },
];

const todoReducer = (state = initialState, action) => {
    switch (action?.type) {
        case "agregar":
            return [...state, action.payload];
        default:
            return state;
    }
};

const newTodo = {
    id: 2,
    todo: "Comprar Leche",
    done: false,
};

let state = todoReducer();



const addToDoAction = {
    type: "agregar",
    payload: newTodo,
};

state = todoReducer(state, addToDoAction);

console.log(state);