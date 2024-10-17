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

For providing focus when the website first time opens or for any logic i want to provide focus for that purpose also useref 

const feedbackInputRef = useRef(null);

down you have to apply to text area 

ref={feedbackInputRef}

means for this control u have to apply 
<textarea
value={inputFeedback}
ref={feedbackInputRef} // 2nd change done
onChange={(e) => {
setInputFeedback(e.target.value);
}}

3rd change 
 useEffect(() => {
    feedbackInputRef.current.focus();  //here is the chnage 
console.log("This will be called on Initial/first Render/Mount");
return () => {
console.log("This will be called on when component will be UNMOUNTED");
};
}, []);

Next new project is routing means how to provide routing to the application 
create a new app in your regular base fodler with the name routingdemo 


do the intial set up and after that in src folder i need Header.jsx ,About.jsx ,CryptoDetail.jsx,Home.jsx and NotFound.jsx 

and index.html
--------------
      index.html
***********
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<meta name="description" content="Web site created using create-react-app"
/>
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-
rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
crossorigin="anonymous" />
<!-- JavaScript Bundle with Popper -->
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min
.js"
integrity="sha384-
kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
crossorigin="anonymous"></script>
<title>React App</title>
</head>
<body style="background-color: black; color: whitesmoke">
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>
</html>

go to each page and write the command rafce
now go to getbootstrap.com and there take version v4.6 and search bar type nav/nav bar 

      and take one nav bar from there which i have taken this below and paste that code in header return desing 


Header.jsx 
-------------
      import React from 'react'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
   
  </div>
</nav>
  )
}

export default Header

refer this Header in index.js file 
      
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
  </div>
  
);

further modified Heaer 
      ----------------
      import React from 'react'
import logo from "./images/logo512.png"; 
const Header = () => {
    return (
        <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    
                                
            <img
src={logo}
alt=""
style={{ height: "35px", verticalAlign: "top" }}
/> &nbsp;
                    
                    Routing Demo</a>
        
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
   
  </div>
            </nav>
            </div>
  )
}

export default Header


write this command in command prompt means in terminal

npm i react-router-dom@6.4.3




      

      
