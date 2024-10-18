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
Now create new file destinationSlice.js in slice folder which is ther in redux means in redux--slice--destinationSclie.js 

destinationSlice.js 
---------------------

import { createSlice } from "@reduxjs/toolkit";
const initalState = () => {
return {
            destinations: [
            {
            name: "Hong Kong",
            days: 7,
            fact: "World's longest covered escalator",
            },
            {
            name: "Japan",
            days: 10,
            fact: "Japan is mostly mountains",
            },
            {
            name: "New Zealand",
            days: 14,
            fact: "Last country in the world to be inhabited by humans",
            },
            ],
        };
};

export const destinationSlice = createSlice({
name: "destination",
initialState: initalState,
reducers: {},
});
export const destinationReducer = destinationSlice.reducer;

register in store.js
-------------------
  import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/destinationSlice";
export const store = configureStore({
reducer: {
counterStore: counterReducer,
destinationStore: destinationReducer,
//we will fill this reducer in the upcoming videos
},
});
console.log(store.getState());

create one destinationList.jsx in compoenents fodler 
------------------------------------------------------

import React from "react";
import { useSelector } from "react-redux";
function DestinationList() {
const destinationList = useSelector(
(state) => state.destinationStore.destinations
);
return destinationList.map((destination, index) => {
return (
<div
className="text-center text-white row"
style={{ borderBottom: "1px solid #333" }}
key={index}
>
<div className="col-8 col-md-3 offset-md-3 pt-2">
{destination.name}
</div>
<div className="col-4 col-md-2">
<button className="btn btn-success form-control m-
1">Details</button>
</div>

</div>
);
});
}
export default DestinationList;

index.jsx 
----------
  import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./app/components/Counter";
import DestinationList from "./app/components/destinationList";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<React.StrictMode>
<Provider store={store}>
            <Header />
            <Counter />
            <DestinationList />
</Provider>
</React.StrictMode>
);

Now on click of details button i want to retrieve the values
so go to destinationSlice.js file and the updated code is
Now code for destinationSlice.js 
----------------------------------

import { createSlice } from "@reduxjs/toolkit";
const initalState = () => {
return {
destinations: [
{
name: "Hong Kong",
days: 7,
fact: "World's longest covered escalator",
},
{
name: "Japan",
days: 10,
fact: "Japan is mostly mountains",
},
{
name: "New Zealand",
days: 14,
fact: "Last country in the world to be inhabited by humans",
},
],

destinationSelected: null,// change done
};
};
//change done
export const destinationSlice = createSlice({
name: "destination",
initialState: initalState,
reducers: {
destinationClicked: (state, action) => {
state.destinationSelected = action.payload;
console.log(action);
},
},
});
export const { destinationClicked } = destinationSlice.actions;//change done
export const destinationReducer = destinationSlice.reducer;


destionList.jsx 
----------------
  import React from "react";
import { useSelector, useDispatch } from "react-redux"; // useDispatch added
import { destinationClicked } from "../../redux/slice/destinationSlice";//

function DestinationList() {
const destinationList = useSelector(
(state) => state.destinationStore.destinations
);
const dispatch = useDispatch();// change done
return destinationList.map((destination, index) => {
return (
<div
className="text-center text-white row"
style={{ borderBottom: "1px solid #333" }}
key={index}
>
<div className="col-8 col-md-3 offset-md-3 pt-2">
{destination.name}
</div>
<div className="col-4 col-md-2">
<button
className="btn btn-success form-control m-1"
onClick={() => dispatch(destinationClicked(destination))}// change
done
>

Details
</button>
</div>
</div>
);
});
}
export default DestinationList;

then check once in log u can retrive that or nt 
As I am able to get that object in console.log i want to disolay it aother compent DestinationFact.jsx 
so create one file in cmponents folder which is DestinationFact.jsx 

and code is below 

import React from "react";
import { useSelector } from "react-redux";
function DestinationFact() {
const selectedDestination = useSelector(
(state) => state.destinationStore.destinationSelected
);
if (selectedDestination == undefined) {
return (
<div className="text-center pt-4 text-warning">Select a

Destination</div>
);
} else {
return (
<div className="text-center border p-3 m-3">
<h4 className="text-success">{selectedDestination.name}</h4>
Days Recommened : {selectedDestination.days} <br />
Fun Fact : {selectedDestination.fact}
</div>
);
}
}
export default DestinationFact;


index.js
---------
  import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./app/components/Counter";
import DestinationList from "./app/components/destinationList";
import DestinationFact from "./app/components/DestinationFact";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<React.StrictMode>
<Provider store={store}>
            <Header />
            <Counter />
            <DestinationList />
            <DestinationFact />
</Provider>
</React.StrictMode>
);









