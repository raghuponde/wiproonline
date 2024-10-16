e i
Now i want to upload or load student from web api to array which is there in state of the class 

for that the code is so didmount code is updated here 

componentDidUpdate = async (previousProps, previousState) => {
console.log("Component Did Update");
localStorage.setItem("cylcopediaState", JSON.stringify(this.state));
console.log("Old State - " + previousState.studentCount);
console.log("New State - " + this.state.studentCount);
if (previousState.studentCount < this.state.studentCount) {
const response = await getRandomUser();
this.setState((prevState) => {
return {
studentList: [
... prevState.studentList,
{
name: response.data.first_name + " " + response.data.last_name,
},
],
};
});
} else if (previousState.studentCount > this.state.studentCount) {
this.setState((prevState) => {
return {
studentList: [],
};
});
}
};

and after remove students design 

Remove All Students
</button>
this code write after above deign 
------------------------------------
{this.state.studentList.map((student, index) => {
return (
<div className="text-white" key={index}>
- {student.name}
</div>
);
})}


Now i am creating a new project where I will use function to uppdate the counter earleir same task we have one using classes lng back now using functions i will do it 

  functincounterdemo 
____________

do the intial set up and for that set up code is below 

index.html
***************
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<meta
name="description"
content="Web site created using create-react-app"
/>
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-
Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
crossorigin="anonymous"
/>
<script
src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js
"
integrity="sha384-
oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
crossorigin="anonymous"
></script>
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
integrity="sha384-
IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk"
crossorigin="anonymous"
></script>
<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrapicons@
1.10.2/font/bootstrap-icons.css"
/>
<title>React App</title>
</head>
<body style="background-color: black">
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>

</body>
</html>
Header.jsx
***********
import logo from "./images/logo192.png";
function Header() {
return (
<div className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
<img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }}
/>
<span className="h2 pt-4 m-2 text-white-50">WatchOPedia</span>
</div>
);
}

export default Header;
index.js
***********
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<Header />
</React.StrictMode>
);


Now add one file Counter.jsx in src folder and code for that 



  const Counter = () => {
return (
<div className="col-12 col-md-4 offset-md-4 border text-white">
<span className="h2 pt-4 m-2 text-white-50">Fun Counter </span>
<br />
<button className="btn btn-success m-1">+1</button>
<button className="btn btn-danger m-1">-1</button>
<br />
<span className="h4">
Counter: &nbsp;
<span className="text-success">0</span>
</span>
</div>
);
}
export default Counter

  and in index.jsx 

  index.js
*********
import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import Header from "./Header";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<Header />
<div className="p-2 m-2 row text-center">
<Counter />
</div>
</React.StrictMode>
);



updated code of Counter with some bugs 
  ___________________________________
  import { useState } from "react";

const Counter = () =>
{
    const [counter, setCounter] = useState(0);
    
    function incrementCounter()
    {
        setCounter(counter + 1);
    }

    function decrementCounter()
    {
        setCounter(counter - 1);
        setCounter(counter - 1);
    }

        return (
        <div className="col-12 col-md-4 offset-md-4 border text-white">
        <span className="h2 pt-4 m-2 text-white-50">Fun Counter </span>
        <br />
        <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
        <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
        <br />
        <span className="h4">
        Counter: &nbsp;
                    <span className="text-success">{counter }</span>
        </span>
        </div>
            );
    
}

export default Counter;


uppdated code again with previous 
  __________________________________
  import { useState } from "react";

const Counter = () =>
{
    const [counter, setCounter] = useState(0);
    
    function incrementCounter()
    {
        setCounter(counter + 1);
    }

    function decrementCounter()
    {
        setCounter((prevState)=>{ return prevState -1});
        setCounter((prevState)=>{ return prevState -1});
    }

        return (
        <div className="col-12 col-md-4 offset-md-4 border text-white">
        <span className="h2 pt-4 m-2 text-white-50">Fun Counter </span>
        <br />
        <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
        <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
        <br />
        <span className="h4">
        Counter: &nbsp;
                    <span className="text-success">{counter }</span>
        </span>
        </div>
            );
    
}

export default Counter;

try this code once 
  -------------------
  import { useState } from "react";
function intialsetup()
{
console.log("hello");
return 10;
}
const Counter = () =>
{
    const [counter, setCounter] = useState(intialsetup());
    
    function incrementCounter()
    {
        setCounter(counter + 1);
    }

    function decrementCounter()
    {
        setCounter((prevState)=>{ return prevState -1});
        setCounter((prevState)=>{ return prevState -1});
    }

        return (
        <div className="col-12 col-md-4 offset-md-4 border text-white">
        <span className="h2 pt-4 m-2 text-white-50">Fun Counter </span>
        <br />
        <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
        <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
        <br />
        <span className="h4">
        Counter: &nbsp;
                    <span className="text-success">{counter }</span>
        </span>
        </div>
            );
    
}

export default Counter;

  here constructor value has to be intilized only once whic is not happening 

so here second time or third time hello should not come hello
final code 
  ------------
import { useState } from "react";
// function intialsetup()
// {
// console.log("hello");
// return 10;
// }
const Counter = () =>
{
    const [counterState, setCounterState] = useState(() => { return { counter: 10 };});
    
    function incrementCounter()
    {
        setCounterState((prevState) => { return { counter:prevState.counter + 1 }; });
    }

    function decrementCounter()
    {
        setCounterState((prevState) => { return { counter: prevState.counter - 1 } });
        setCounterState((prevState)=>{ return {counter:prevState.counter -1} });
    }

        return (
        <div className="col-12 col-md-4 offset-md-4 border text-white">
        <span className="h2 pt-4 m-2 text-white-50">Fun Counter </span>
        <br />
        <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
        <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
        <br />
        <span className="h4">
        Counter: &nbsp;
                    <span className="text-success">{counterState.counter }</span>
        </span>
        </div>
            );
    
}

export default Counter;



Use state is an array so i can declare multiole name value pair object in it means counterState is a variable and it has many values like counter =10 and title='fun"

  import { useState } from "react";
// function intialsetup()
// {
// console.log("hello");
// return 10;
// }
const Counter = () =>
{
    const [counterState, setCounterState] = useState(() => { return { counter: 10,title:"Fun" };});
    
    function incrementCounter()
    {
        setCounterState((prevState) => { return { counter:prevState.counter + 1 }; });
    }

    function decrementCounter()
    {
        setCounterState((prevState) => { return { counter: prevState.counter - 1 } });
        setCounterState((prevState)=>{ return {counter:prevState.counter -1} });
    }

        return (
        <div className="col-12 col-md-4 offset-md-4 border text-white">
        <span className="h2 pt-4 m-2 text-white-50">{counterState.title} Counter </span>
        <br />
        <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
        <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
        <br />
        <span className="h4">
        Counter: &nbsp;
                    <span className="text-success">{counterState.counter }</span>
        </span>
        </div>
            );
    
}

export default Counter;


Allways of intilizeing shown here 
  -------------------------------
  import { useState } from "react";
// function intialsetup()
// {
// console.log("hello");
// return 10;
// }
const Counter = () =>
{
    const [counterState, setCounterState] = useState(() => { return { counter: 10,title2:"Fun" }; });
    
    const[titleState,setTitleState]=useState("Fun")// not much used 
     const[titleState1,setTitleState1]=useState(() => { return { title1: "Fun" }; })
    function incrementCounter()
    {
        setCounterState((prevState) => { return { counter:prevState.counter + 1 }; });
    }

    function decrementCounter()
    {
        setCounterState((prevState) => { return { counter: prevState.counter - 1 } });
        setCounterState((prevState)=>{ return {counter:prevState.counter -1} });
    }

        return (
        <div className="col-12 col-md-4 offset-md-4 border text-white">
             
                <span className="h2 pt-4 m-2 text-white-50">{titleState} Counter </span><br/>
                <span className="h2 pt-4 m-2 text-white-50">{titleState1.title1} Counter </span><br/>
                   <span className="h2 pt-4 m-2 text-white-50">{counterState.title2} Counter </span>
        <br />
        <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
        <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
        <br />
        <span className="h4">
        Counter: &nbsp;
                    <span className="text-success">{counterState.counter }</span>
        </span>
        </div>
            );
    
}

export default Counter;

  here in above program all the varities of using set state i have shown based on how u declare with Fun in design 
Now u have to create one folder called as MovieComponents and in the files AddMovie.jsx ,MovieList.jsx and MoviePage.jsx 
  in the Moviepage links for AddMovie and MovieList wll be there 

  import React from 'react'

function AddMovie() {
    return (
      <div>
    
      <form>
                <div className="row text-white">
                    <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
                    <div className='col-8 offset-1'>
                    <input type="text" placeholder='Movie name..'></input>
                    </div>
                    <div className='col-2'>
                    <button className='btn btn-success  form-control'>Add</button> 
                    </div>
                   <hr className="mt-3" />
                </div>     


      </form>

       </div>
  )
}

export default AddMovie

  so call this in Movie page 

  import React from 'react'
import AddMovie from './AddMovie'
function MoviePage() {
  return (
      <div className='container col-12 col-md-6 my-3 border'>
          <AddMovie />
      </div>
  )
}

export default MoviePage

  and in index.js 

  -------------

  import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import Header from "./Header";
import MoviePage from "./MovieComponents/MoviePage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<Header />
<div className="p-2 m-2 row text-center">
      <Counter />
      <MoviePage />
</div>
</React.StrictMode>
);


Now MoviePage i had added array 

  and in Movie list that array i am passing it as props 

  MoviePage.jsx updated 
  ------------------------
import React, { useState } from 'react'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
const  MoviePage=()=> {

    const [movieState, setMovieState] = useState(() => {
    
        return { MovieList: ["DieHard","Hulk","THOR"] }
    })
    

  return (
      <div className='container col-12 col-md-6 my-3 border'>
          <AddMovie />
          <MovieList movieList={movieState.MovieList} />
      </div>
  )
}

export default MoviePage



MovieList updated 
  ---------------
import React from 'react'

const MovieList = (props) => {
  return (
   
      <div className='text-white'>
          {props.movieList.map((movie, index) => {
              
              return <div key={index}> {movie }</div>

          })}
      </div>
      
      
  )
}

export default MovieList

  Final codes 
  ------------
  import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
//movieList: ["Die Hard", "Harry Potter"]
const MoviePage = () => {
const [movieState, setMovieState] = useState(() => {
return { movieList: ["Die Hard", "Harry Potter"] };
});
function handleAddMovie(newMovie) {
setMovieState((prevState) => {
return {
... prevState,
movieList: prevState.movieList.concat([newMovie]),
};
});
}
return (
<div className="container col-12 col-md-6 my-3 border">
<AddMovie handleAddMovie={handleAddMovie} />
<MovieList movieList={movieState.movieList} />
</div>
);
};
export default MoviePage;

  

  ------------------------
  import React from 'react'

const MovieList = (props) => {
  return (
   
      <div className='text-white'>
          {props.movieList.map((movie, index) => {
              
              return <div key={index}> {movie }</div>

          })}
      </div>
      
      
  )
}

export default MovieList


  
  ---------------------
import { useState } from "react";
const AddMovie = (props) => {
const [name, setName] = useState("");
function submitAddMovieForm(e, props) {
e.preventDefault();
props.handleAddMovie(name);
setName("");
}
return (
<form onSubmit={(e) => submitAddMovieForm(e, props)}>
<div className="row text-white">
<div className="col-12 text-center py-1 h4 text-success">Add
Movie</div>
<div className="col-8 offset-1">
<input
type="text"
className="form-control"
placeholder="Movie Name..."
value={name}
onChange={(e) => setName(e.target.value)}
></input>
</div>
<div className="col-2">
<button className="btn btn-success form-control">Add</button>
</div>
<hr className="mt-3" />
</div>
</form>
);
};
export default AddMovie;

Now you have to open the project which i was doing for classevents ...

  in that add two pages one is CycloPediaFuncPage.jsx and another is InstructorFunc.jsx 

  and then copy the code of class into theses pages and chnage only names  class  typpe and export also change 
  

  instrcutorfunc page 
  --------------------
  import React from "react";
class InstructorFunc extends React.Component {
            constructor(props) {
            super(props);
            }
            componentDidUpdate() {
            console.log("Update - Instructor");
            }
            componentDidMount() {
            console.log("Mounted - Instructor");
            }
            componentWillUnmount() {
            console.log("UnMount - Instructor");

            }
render() {
console.log("Render - Instructor");
return (
<div className="">
Name: {this.props.instructor.name} <br />
Email : {this.props.instructor.email}
<br />
Phone : {this.props.instructor.phone}
<br />
</div>
);
}
}
export default InstructorFunc;


cyclopediaFuncPage 
  ------------------
      import React from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";
class CycloPediaFuncPage extends React.Component {
constructor(props) {
super(props);
this.state = JSON.parse(localStorage.getItem("cylcopediaState")) || {
instructor: undefined,
studentList: [],
studentCount: 0,
hideInstructor: false,
inputName: "",
inputFeedback: "",
};
}
componentDidMount = async () => {
console.log("Component Did Mount");
if (JSON.parse(localStorage.getItem("cylcopediaState"))) {
// this.setState(JSON.parse(localStorage.getItem("cylcopediaState")));
} else {
const response = await getRandomUser();
console.log(response);
this.setState((prevState) => {
return {
instructor: {
name: response.data.first_name + " " + response.data.last_name,
email: response.data.email,
phone: response.data.phone_number,
},
};
});
}
};
    componentDidUpdate = async (previousProps, previousState) =>
    {
            console.log("Component Did Update");
            localStorage.setItem("cylcopediaState", JSON.stringify(this.state));
            console.log("Old State - " + previousState.studentCount);
            console.log("New State - " + this.state.studentCount);
            if (previousState.studentCount < this.state.studentCount) {
            const response = await getRandomUser();
            this.setState((prevState) => {
            return {
            studentList: [
            ... prevState.studentList,
            {
            name: response.data.first_name + " " + response.data.last_name,
            },
            ],
            };
            });
            } else if (previousState.studentCount > this.state.studentCount) {
            this.setState((prevState) => {
            return {
            studentList: [],
            };
            });
            }
};
componentWillUnmount() {
console.log("Component Will UnMount");
}
handleAddStudent = () => {
this.setState((prevState) => {
return {
studentCount: prevState.studentCount + 1,
};
});
};
handleRemoveAllStudent = () => {
this.setState((prevState) => {
return {
studentCount: 0,
};
});
    };
    handletoggleInstructor = () => {
this.setState((prevState) => {
return {
hideInstructor: !prevState.hideInstructor,
};
});
};
render() {
console.log("Render Component");
return (
    <div>
         <div className="p-3">

<i
className={` bi ${
this.state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
} btn btn-success btn-sm`}
onClick={this.handletoggleInstructor}
></i>
{!this.state.hideInstructor ? (
<Instructor instructor={this.state.instructor} />
) : null}
</div>
    


<div className="p-3">
<span className="h4 text-success">Feedback</span>
<br />
<input
type="text"
value={this.state.inputName}
placeholder="Name.."
onChange={(e) => {
this.setState({ inputName: e.target.value });
}}
></input>{" "}
Value : {this.state.inputName}
<br />
<textarea
value={this.state.inputFeedback}
onChange={(e) => {
this.setState({ inputFeedback: e.target.value });
}}
placeholder="Feedback..."
></textarea>
Value : {this.state.inputFeedback}
</div>
<div className="p-3">
<span className="h4 text-success">Students</span> <br />
<div>Student Count : {this.state.studentCount}</div>
<button
className="btn btn-success btn-sm"
onClick={this.handleAddStudent}
>
Add Student
</button>
&nbsp;
<button
className="btn btn-danger btn-sm"
onClick={this.handleRemoveAllStudent}
>
Remove All Students
            </button>

    {this.state.studentList.map((student, index) => {
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
}
export default CycloPediaFuncPage;



index.js 
---------
  import React from "react";
import ReactDOM from "react-dom/client";
import CycloPediaClassPage from "./CycloPediaClassPage";
import Header from "./Header";
import CycloPediaFuncPage from "./CycloPediaFuncPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<div>
<Header />
<div className="row text-white">
<div className="col-6">
<span className="h1 text-warning text-center">Class Component</span>
<CycloPediaClassPage />
            </div>
            
<div className="col-6">
<span className="h1 text-warning text-center">Func  Component</span>
<CycloPediaFuncPage />
</div>
</div>
</div>
);


Now in clas page 
  ---------------
  do comment to this much code

  // constructor(props) {
// super(props);
// this.state = JSON.parse(localStorage.getItem("cylcopediaState")) || {
// instructor: undefined,
// studentList: [],
// studentCount: 0,
// hideInstructor: false,
// inputName: "",
// inputFeedback: "",
// };
// }
// componentDidMount = async () => {
// console.log("Component Did Mount");
// if (JSON.parse(localStorage.getItem("cylcopediaState"))) {
// // this.setState(JSON.parse(localStorage.getItem("cylcopediaState")));
// } else {
// const response = await getRandomUser();
// console.log(response);
// this.setState((prevState) => {
// return {
// instructor: {
// name: response.data.first_name + " " + response.data.last_name,
// email: response.data.email,
// phone: response.data.phone_number,
// },
// };
// });
// }
// };
//     componentDidUpdate = async (previousProps, previousState) =>
//     {
//             console.log("Component Did Update");
//             localStorage.setItem("cylcopediaState", JSON.stringify(this.state));
//             console.log("Old State - " + previousState.studentCount);
//             console.log("New State - " + this.state.studentCount);
//             if (previousState.studentCount < this.state.studentCount) {
//             const response = await getRandomUser();
//             this.setState((prevState) => {
//             return {
//             studentList: [
//             ... prevState.studentList,
//             {
//             name: response.data.first_name + " " + response.data.last_name,
//             },
//             ],
//             };
//             });
//             } else if (previousState.studentCount > this.state.studentCount) {
//             this.setState((prevState) => {
//             return {
//             studentList: [],
//             };
//             });
//             }
// };
// componentWillUnmount() {
// console.log("Component Will UnMount");
// }




  





  
