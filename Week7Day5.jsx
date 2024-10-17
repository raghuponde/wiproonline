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

whole code till now 
--------------------
      import React,{ useState, useEffect,useRef} from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";
const CycloPediaFuncPage = () => {
    
    const [state, setState] = useState(() => {
         
        return {
           
            instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstrcutor: false,

        };


    });

    // const [totalRender, setTotalRender] = useState(0);
    const totalRender = useRef(0);
    const [inputName, setInputName] = useState(() => {
        return "";
    })

    const [inputFeedback, setInputFeedback] = useState(() => {
        
        return "";
    })

  useEffect(() => {
//setTotalRender((prevState) => prevState + 1);
totalRender.current = totalRender.current + 1;
console.log("render" + totalRender.current);
});
    useEffect(() => {
        const getUser = async () => {
    console.log("evrry render i will be called ")
const response = await getRandomUser();
setState((prevState) => {
return {
... prevState,
studentList: [
... prevState.studentList,
{
name: response.data.first_name + " " + response.data.last_name,
},
],
};
});
};
if (state.studentList.length < state.studentCount) {
getUser();
} else if (state.studentList.length > state.studentCount) {

setState((prevState) => {
return { ... prevState, studentList: [] };
});
}
}, [state.studentCount]);
useEffect(() => {
console.log("This will be called on Initial/first Render/Mount");
const getUser = async () => {
const response = await getRandomUser();
setState((prevState) => {
return {
... prevState,
instructor: {
name: response.data.first_name + " " + response.data.last_name,
email: response.data.email,
phone: response.data.phone_number,
},
};
});
};
if (state.hideInstructor) {
getUser();
}
}, [state.hideInstructor]);

useEffect(() => {
console.log(
"This will be called on whenever value of input teextbox modifed changes"
);
}, [inputFeedback, inputName]);
useEffect(() => {
console.log("This will be called on Initial/first Render/Mount");
return () => {
console.log("This will be called on when component will be UNMOUNTED");
};
}, []);

const handleAddStudent = () => {
setState((prevState) => {
    return {
    ...prevState,
studentCount: prevState.studentCount + 1,
};
});
};
const handleRemoveAllStudent = () => {
        setState((prevState) => {
            return {
            ...prevState,
        studentCount: 0,
        };
        });
    };
  const   handletoggleInstructor = () => {
setState((prevState) => {
    return {
    ...prevState,
hideInstructor: !prevState.hideInstructor,
};
});
};


return (
    <div>
         <div className="p-3">

<i
className={` bi ${
state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
} btn btn-success btn-sm`}
onClick={handletoggleInstructor}
></i>
{!state.hideInstructor && state.instructor ? (
<Instructor instructor={state.instructor} />
) : null}
</div>
 <div className="p-3">Total Render : {totalRender.current}</div>

<div className="p-3">
<span className="h4 text-success">Feedback</span>
<br />
<input
type="text"
value={inputName}
placeholder="Name.."
onChange={(e) => {
setInputName(e.target.value);
}}
></input>{" "}
Value : {inputName}
<br />
<textarea
value={inputFeedback}
onChange={(e) => {
setInputFeedback(e.target.value);
}}
placeholder="Feedback..."
></textarea>
Value : {inputFeedback}
</div>
<div className="p-3">
<span className="h4 text-success">Students</span> <br />
<div>Student Count : {state.studentCount}</div>
<button
className="btn btn-success btn-sm"
onClick={handleAddStudent}
>
Add Student
</button>
&nbsp;
<button
className="btn btn-danger btn-sm"
onClick={handleRemoveAllStudent}
>
Remove All Students
            </button>

    {state.studentList.map((student, index) => {
return (
<div className="text-white" key={index}>
- {student.name}
</div>
);
})}

</div>
</div>
);

}
export default CycloPediaFuncPage;





