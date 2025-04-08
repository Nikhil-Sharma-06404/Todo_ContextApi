import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id : 1,
        todo : "Test 123",
        completed : false
    }],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    updateTodo : (id,todo) => {},
    toggleComplete : (id) => {}
})

// Note : redux state management using createSlice is same but there reducers like 
// addTodo, deletettodo functions are also declared and defined with (State,actions) & used via actions.payload

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}