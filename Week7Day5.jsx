continuing from yesterday demo
here i want to maintain count of students so if do normally it is going in infinite loop to avoid that
i am using useref and whole code i am pasting and added code i am highlighting here okay
and i am removing all comments and now
above feedback some design of Total render is added okay
added code
Now i want to tell about useRef usage now for this what u do is that

const [totalRender, setTotalRender] = useState(0);  //change one 
// write the above code before
const [inputName, setInputName] = useState(() => {
return "";
})

// and then call useeffect function and after same kind of inputFeedback
//method // write below method so here totalRender which is zero and will increase 1
//
//change two 
useEffect(() => {
setTotalRender((prevState) => prevState + 1);
console.log("render" + totalRender);

});




so i had written the changed code here below when i use useref what will happen will it will
have a
current state and that state only i have to set here ...which i am doing in below code
Total code below
//chnage three 
<div className="p-3">Total Render :{totalRender}

so the abov code is taking me to infinite loop 

so to avoid that i will use useref i will use 

import React, { useEffect, useRef, useState } from "react";

const totalRender = useRef(0);

useEffect(() => {
//setTotalRender((prevState) => prevState + 1);
totalRender.current = totalRender.current + 1;
console.log("render" + totalRender.current);
});

<div className="p-3">Total Render : {totalRender.current}</div>



