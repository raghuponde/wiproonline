counterSlice.js 
-------------------
  import { createSlice } from "@reduxjs/toolkit";
const initalState = { count: 10 };
export const counterSlice = createSlice({
name: "counter",
initialState: initalState,
reducers: {
//here we will define all actions
increment: (state) => {
state.count += 1;
},
decrement: (state) => {
state.count1 = 1;
},
},
});
export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

store .js 
----------
  import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
    reducer: {
    counterStore: counterReducer,
//we will fill this reducer in the upcoming videos
},
});

// console.log(store.getState());
// store.dispatch({
// type: "counter/increment", });
// console.log(store.getState());






Counter.jsx code 
-----------------
  import React from "react";
import { useSelector } from "react-redux";

function Counter()
{
    const count = useSelector((state) => state.counterStore.count);
    return <div>{count}</div>;
}
export default Counter;


index.jsx 
-------------
  import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./app/components/Counter";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<React.StrictMode>
<Provider store={store}>
            <Header />
            <Counter />
</Provider>
</React.StrictMode>
);

