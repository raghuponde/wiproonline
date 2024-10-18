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

 Now i want to do one task means by adding button click what ever is there in counter tht wil be aded again 

so i added two more buttons with a text  box and that textbox i am making it controlled component means two way binding i am providing 

and I will write some more methods in counterslice and i will export the whenver text box is coming payload is use 
 counter.jsx 
-------------------
import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../../redux/slice/counterSlice";
function Counter() {
    const count = useSelector((state) => state.counterStore.count);
    const dispatch = useDispatch();
    const [multiplier, setMultiplier] = useState(10);
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
                <div className=" p-4 col-12 col-md-6">
                    <div className="border p-4">
                    <h4 className="text-success pb-2">Multiplier Counter</h4>
                    <div className="row">
                    <div className="col-4 p-1">
                        <input
                        type="test"
                        placeholder="multipler..."
                        className="form-control"
                        value={multiplier}
                        onChange={(e) => setMultiplier(e.target.value)}
                        />     <span style={{color : "red", background:"white"}}></span>vlaue: {multiplier}
                            </div>
                         
                <div className="col-4 p-1">
                <button
                className="btn btn-primary form-control"

                >
                        Add
                        </button>
                        </div>
                        <div className="col-4 p-1">
                        <button
                        className="btn btn-danger form-control"

                        >
                        Remove
                        </button>
                        </div>
                        </div>
                        </div>
                        </div>
            </div>
            </div>

    )
}
export default Counter;

next is going to counterSlice.js
-----------------------------------
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
decrementMultiplier: (state, action) => {
state.count -= action.payload;
},
incrementMultiplier: (state, action) => {
state.count += Number(action.payload);
},
},
});
export const {
increment,
decrement,
incrementMultiplier,
decrementMultiplier,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

Updated Counter.jsx code (importing new methds and also putting dispatch havig form text data as payload )
--------------------------
  import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,incrementMultiplier,decrementMultiplier } from "../../redux/slice/counterSlice";
function Counter() {
    const count = useSelector((state) => state.counterStore.count);
    const dispatch = useDispatch();
    const [multiplier, setMultiplier] = useState(10);
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
                <div className=" p-4 col-12 col-md-6">
                    <div className="border p-4">
                    <h4 className="text-success pb-2">Multiplier Counter</h4>
                    <div className="row">
                    <div className="col-4 p-1">
                        <input
                        type="test"
                        placeholder="multipler..."
                        className="form-control"
                        value={multiplier}
                        onChange={(e) => setMultiplier(e.target.value)}
                        />     <span style={{color : "red", background:"white"}}></span>vlaue: {multiplier}
                            </div>
                         
                <div className="col-4 p-1">
                <button
                className="btn btn-primary form-control"
onClick={() => dispatch(incrementMultiplier(multiplier))}
                >
                        Add
                        </button>
                        </div>
                        <div className="col-4 p-1">
                        <button
                        className="btn btn-danger form-control"
onClick={() => dispatch(decrementMultiplier(multiplier))}
                        >
                        Remove
                        </button>
                        </div>
                        </div>
                        </div>
                        </div>
            </div>
            </div>

    )
}
export default Counter;




















