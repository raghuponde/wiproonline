Here create folder app in src and in app folder components and layout are sub folders and in componenets declare Counter.jsx and In layout Header.jsx 


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

Now i want buttons in Counter.jsx and want to use increment and decrement of counterSlice,js file 
so updated counterSlice.js
-----------------------------
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
state.count -= 1;
},
},
});
export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

Counter.jsx 
-------------
  import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../../redux/slice/counterSlice";
function Counter() {
    const count = useSelector((state) => state.counterStore.count);
    const dispatch = useDispatch();
    return (
        
        <div className="mt-2 pt-3 pl-2 text-center " style={{ borderTop:"1px solid #999"}}>
            <div className="text-white pb-2 h4">Counter:{count}</div>
            <div className="row">
                <div className="p-4 col-12 col-md-6 ">
                    <div className="border p-4">
                        <button className="btn btn-primary" onClick={() => dispatch(increment())}>
                            Add
                        </button> {" "} &nbsp;
                          <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
                            Remove
                        </button>
                   
                </div>
            </div>
            </div>
            </div>

    )
}
export default Counter;
























