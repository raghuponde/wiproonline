
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












