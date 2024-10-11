keep all headers into seperate file Header.jsx and export the main header which is holding other headers

Header.jsx
-----------
function MainHeader()
{
return (<div><h2 className='text-primary'> The React Course </h2>
<h2 className='heading2'> The React Course2 </h2>
</div>
);
}
const subHeaderStyle = {
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
export function Header()
{
return(
<div>
<MainHeader></MainHeader>
<SubHeader></SubHeader>
</div>
)
}


footer.jsx
--------------
function MainHeader()
{
return (<div><h2 className='text-primary'> The React Course </h2>
<h2 className='heading2'> The React Course2 </h2>
</div>
);
}
const subHeaderStyle = {
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
export function Header()
{
return(
<div>
<MainHeader></MainHeader>
<SubHeader></SubHeader>
</div>
)
}


now let us add one compoent for practise later 
--------------------------------------------
Practise.jsx
-------------

version 1 
----------
export   function App()
{
    var userName = "rajesh kumar";
    var userAge = 34;
    var userLocation = "chennai";
    return (
        <div>
            <h1>{userName}</h1>
            <p>Age :{userAge}</p>
            <p> Location : { userLocation}</p>

        </div>
    )
}

import in index.js file 

and add in root tag 

version 2
-----------
export function App()
{
 
    var user = {
        name: "rajesh kumar ",
        age: 35,
        location:"bangalore"
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Age :{user.age}</p>
            <p> Location : {user.location}</p>

        </div>
    )
}


version3 
-------------
export function App()
{
 
    var user = {
        name: "rajesh kumar ",
        age: 35,
        location:'hyderbad'
    }
    function getlocation(location)
    {
        if (location)
        {
            return location;
        }
        else
        {
            return 'unknown';     
        }
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Age :{user.age}</p>
            <p> Location : {getlocation(user.location)}</p>

        </div>
    )
}


version 4 
----------
export function App()
{
 
    const user = {
        name: "Andrew",
        cities: ['newyork', 'Dublin', 'Moscow'],
        printplaceslived() {
         
            return this.cities.map((city) => this.name + ' has lived in  '+city);
              
        }

  }

    return (
        <div>
            <h3>{user.printplaceslived() }</h3>
        </div>
    )
}

version 5
---------
import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(count + 1);
  const minusOne = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>&nbsp;
      <button onClick={minusOne}>-1</button>&nbsp;
      <button onClick={reset}>reset</button><br />
    </div>
  );
}


Now create a student.jsx file 
--------------------------------
here u can use men or women and numner 0 to 99 
export function Students()
{
    const fullname = "Kris Walley"
    const ProgrammingExp = 2;
    return (
        <div className="container p-4">
            <div className="row">
                Students Enrolled<br/>
            </div>

            <div className="row border">
                <div className="col-2">
                    <img src="https://randomuser.me/api/portraits/women/10.jpg" className="w-50"></img>
                </div>
                <div className="col-10">
                    {fullname} <br />
                    Programming Experience {ProgrammingExp} years

                </div>
            </div>
        </div>
    )
}



in rhe index.js file 
------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import { Header } from './Header';
import { Footer } from './Footer';
import { Students } from './Student';


function MainBody()
{
return (
<div>
<p>In this course we learn react by building taskopedia </p>
<ul>
<li>Call Ben</li>
<li>Go to walmart</li>
</ul>
</div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
        <Header />
        <MainBody />
        <Students />
        <Students />
         <Students />
<Footer />
</div>
);

here for each student i want to give different image ,name and also expereince which i can do using props proeprty 


index.js
-----------
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import { Header } from './Header';
import { Footer } from './Footer';
import { Students } from './Student';


function MainBody()
{
return (
<div>
<p>In this course we learn react by building taskopedia </p>
<ul>
<li>Call Ben</li>
<li>Go to walmart</li>
</ul>
</div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
        <Header />
        <MainBody />
        <Students experince={4} name="John Doe" headshot="https://randomuser.me/api/portraits/men/40.jpg" />
        <Students   experince={2} name="marry Johnson" headshot="https://randomuser.me/api/portraits/women/40.jpg" />
         <Students  experince={10} name="Harris Hilton" headshot="https://randomuser.me/api/portraits/men/20.jpg" />
<Footer />
</div>
);

student.jsx
------------
export function Students(props)
{
    // const fullname = "Kris Walley"
    // const ProgrammingExp = 2;
    return (
        <div className="container p-4">
            <div className="row">
                Students Enrolled<br/>
            </div>

            <div className="row border">
                <div className="col-2">
                    <img src={props.headshot} className="w-50"></img>
                </div>
                <div className="col-10">
                    {props.name} <br />
                    Programming Experience {props.experience} years

                </div>
            </div>
        </div>
    )
}

Now add folder imgages in src folder and shift logo images into that folder 
and after that put this code header.jsx which i am gving it 

import logo from './images/logo192.png'
function MainHeader()
{
    return (
<div className="pt-3 py-1 pl-2" style={{backgroundColor:"black"}}>
<img src={logo} style={{height:"35px",vertiCalAlign:"top"}}></img>
<span className="h2 pt-4 text-white-50">React Course TaskOPedia -</span>
</div>
);
}
const subHeaderStyle = {
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
export function Header()
{
return(
<div>
<MainHeader></MainHeader>
<SubHeader></SubHeader>
</div>
)
}


Now add this url in index.html page 

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrapicons@
1.11.3/font/bootstrap-icons.min.css">

addd new jsx file studentreviw.jsx and code below 
--------------------------------------------

export default function StudentReview()
{
    return (
        
        <div className="p-2">
       <i class="bi bi-hand-thumbs-up-fill text-success"></i> &nsbp;
        <i class="bi bi-hand-thumbs-down-fill text-danger"></i>
       </div>
    )
}


In index.js 
----------------

<!-- Add Bootstrap Icons CDN link -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css" rel="stylesheet">




studnet 
-------
export function Students(props)
{
    // const fullname = "Kris Walley"
    // const ProgrammingExp = 2;
    return (
        <div className="container p-4">
            <div className="row">
                Students Enrolled<br/>
            </div>

            <div className="row border">
                <div className="col-2">
                    <img src={props.headshot} className="w-50"></img>
                </div>
                <div className="col-10">
                    {props.name} <br />
                    Programming Experience {props.experience} years
                    
                </div>
               
            </div>
            </div>
    )
}

index.js 
----------
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import { Header } from './Header';
import { Footer } from './Footer';
import { Students } from './Student';
import { StudentReviews } from './StudentReview';

function MainBody()
{
return (
<div>
<p>In this course we learn react by building taskopedia </p>
<ul>
<li>Call Ben</li>
<li>Go to walmart</li>
</ul>
</div>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
        <Header />
        <MainBody />
        <Students experince={4} name="John Doe" headshot="https://randomuser.me/api/portraits/men/40.jpg"/>
         <StudentReviews />
        <Students experince={2} name="marry Johnson" headshot="https://randomuser.me/api/portraits/women/40.jpg"/>
          <StudentReviews />
          
         <Students  experince={10} name="Harris Hilton" headshot="https://randomuser.me/api/portraits/men/20.jpg" />
<Footer />
</div>
);


Now i have to convert all the funtions into arrow functions 

export const  StudentReviews=()=>
{
    return (
        
        <div className="p-2">
            <i class="bi bi-hand-thumbs-up-fill text-success"></i> &nsbp;
            <i class="bi bi-hand-thumbs-down-fill text-danger"></i>
        </div>
    );
}

above syntax will work if using {   }  in imports 

if u are directly putting 
import  StudentReviews  from './StudentReview';

then 

const  StudentReviews=()=>
{
    return (
        
        <div className="p-2">
            <i class="bi bi-hand-thumbs-up-fill text-success"></i> &nsbp;
            <i class="bi bi-hand-thumbs-down-fill text-danger"></i>
        </div>
    );
}

export default StudentReviews;

Now let us chnage remaining also

export const  Students=(props)=>
{
    // const fullname = "Kris Walley"
    // const ProgrammingExp = 2;
    return (
        <div className="container p-4">
            <div className="row">
                Students Enrolled<br/>
            </div>

            <div className="row border">
                <div className="col-2">
                    <img src={props.headshot} className="w-50"></img>
                </div>
                <div className="col-10">
                    {props.name} <br />
                    Programming Experience {props.experience} years
                    
                </div>
               
            </div>
            </div>
    )
}

export const  Header=()=>
{
return(
<div>
<MainHeader></MainHeader>
<SubHeader></SubHeader>
</div>
)
}

export const  Footer=()=>
{
return (
<p style={{ color:"gray",backgroundColor:"black" }}> This is footer </p>
)
}


Now till now we used function based compoenents now i want to convert some of the arrow functions in clas based component how to do let us see 

import React from "react";

class StudentReviews extends React.Component 
{
    render() {
        return (
        
            <div className="p-2">
                <i class="bi bi-hand-thumbs-up-fill text-success"></i> &nsbp;
                <i class="bi bi-hand-thumbs-down-fill text-danger"></i>
            </div>
        );
    }
}

export default StudentReviews;

 for student 
 ------------
import React from "react"


 class Students extends React.Component
{
    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    Students Enrolled<br />
                </div>

                <div className="row border">
                    <div className="col-2">
                        <img src={this.props.headshot} className="w-50"></img>
                    </div>
                    <div className="col-10">
                        {this.props.name} <br />
                        Programming Experience {this.props.experience} years
                    
                    </div>
               
                </div>
            </div>
        )
    }
}

export default Students

this sytax for above type of export 

import students from './student'
   

Now I have added header .jsx file and index file changes 
------------------------------------------------------------
import logo from './images/logo192.png'
function MainHeader()
{
    return (
<div className="pt-3 py-1 pl-2" style={{backgroundColor:"black"}}>
<img src={logo} style={{height:"35px",vertiCalAlign:"top"}}></img>
<span className="h2 pt-4 text-white-50">React Course CountoPedia -</span>
</div>
);
}
const subHeaderStyle = {
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
export const  Header=()=>
{
return(
<div>
<MainHeader></MainHeader>
<SubHeader></SubHeader>
</div>
)
}

----------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Header />
);
--------------
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-
    QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js
    " integrity="sha384-
    I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-
    0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrapicons@
    1.11.3/font/bootstrap-icons.min.css">

  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css"
    rel="stylesheet">


  <title>React App</title>
</head>

<body>
  <div id="root">

  </div>

</body>

</html>

updated counter frist add counter.jsx file 
--------------------

import React from "react";

export default class Counter extends React.Component
{
    handleAttack()
    {
        alert('attack clicked')
    }
    handleDefence()
    {
        alert('defence clicked')
    }
    render()
    {
        return (
           
            <div >
       <h1>Counter: </h1>
       <button onClick={this.handleAttack} style={{ width: "200px" }}>+1</button>
         <button onClick={this.handleDefence} style={{ width: "200px" }}>-1</button>
          </div>


       )

    }
}

Now i will add state property which is in built in that  i will put count variable and intilize it with zero 

and same varibale in desing i will call it 

import React from "react";

export default class Counter extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAttack()
    {
        alert('attack clicked')
    }
    handleDefence()
    {
        alert('defence clicked')
    }
    render()
    {
        return (
           
            <div >
       <h1>Counter:{this.state.count} </h1>
       <button onClick={this.handleAttack} style={{ width: "200px" }}>+1</button>
         <button onClick={this.handleDefence} style={{ width: "200px" }}>-1</button>
          </div>


       )

    }
}

see here state is immutable means i cannot modify the count value means directly i cannot modify eg try in comment code which is given down 
so i can chnage the value of state using setState method but u have to bind that method in constructor 


import React from "react";

export default class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.state = {
            count: 0
        }
    }

    handleAttack()
    {
        alert('attack clicked')
        //  this.state.count = 1;
        this.setState({count:2})
    }
    handleDefence()
    {
        alert('defence clicked')
    }
    render()
    {
        return (
           
            <div >
       <h1>Counter:{this.state.count} </h1>
       <button onClick={this.handleAttack} style={{ width: "200px" }}>+1</button>
         <button onClick={this.handleDefence} style={{ width: "200px" }}>-1</button>
          </div>


       )

    }
}


updated counter 
-----------------
import React from "react";

export default class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);
        this.state = {
            count: 0
        }
    }

    handleAttack()
    {
      // alert('attack clicked')
        //  this.state.count = 1;
        // this.setState({count:2})
        this.setState({ count:this.state.count + 1})
    }
    handleDefence()
    {
      //  alert('defence clicked')
          this.setState({ count:this.state.count - 1})
    }
    render()
    {
        return (
           
            <div >
       <h1>Counter:{this.state.count} </h1>
       <button onClick={this.handleAttack} style={{ width: "200px" }}>+1</button>
         <button onClick={this.handleDefence} style={{ width: "200px" }}>-1</button>
          </div>


       )

    }
}
in the handle attack if i put like this 

handleAttack()
    {
      // alert('attack clicked')
        //  this.state.count = 1;
        // this.setState({count:2})
       
        this.setState({ count: this.state.count + 100 })
         this.setState({ count: this.state.count + 10 })
    }

i shoudl get 110 but i will just see that counter is increasing to 20 and then again if clikced 30 like that it is forgetting 100 

if i reverse then it will first 100 and then 200 and will forget previous value of 10 


updated code 
---------------
import React from "react";

export default class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);
        this.state = {
            count: 0
        }
    }

    handleAttack()
    {
      // alert('attack clicked')
        //  this.state.count = 1;
        // this.setState({count:2})
       
      //  this.setState({ count: this.state.count + 100 })
        // this.setState({ count: this.state.count + 10 })
        
       this.setState((previousState) => {
            return {
            count: previousState.count + 100,
            };
            });
        this.setState((previousState) =>{
        return {
            count: previousState.count + 10,
            };
            });

    }
    handleDefence()
    {
      //  alert('defence clicked')
          this.setState({ count:this.state.count - 1})
    }
    render()
    {
        return (
           
            <div >
       <h1>Counter:{this.state.count} </h1>
       <button onClick={this.handleAttack} style={{ width: "200px" }}>+1</button>
         <button onClick={this.handleDefence} style={{ width: "200px" }}>-1</button>
          </div>


       )

    }
}
Now i will put code for +1 and -1 and reset also and that will be final of this project 


final code 
___________
import React from "react";

export default class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);
        this.state = {
            count: 0
        }
    }

   handleAttack=()=>
    {
       this.setState((previousState) =>
       {
            return {
            count: previousState.count + 1,
            };
      });
      

    }
    handleDefence=()=>
    {
     
       this.setState((previousState) =>
       {
            return {
            count: previousState.count - 1,
            };
      });

    }
    handleReset = () =>
    {
            this.setState(() => {
            return {
            count: 0,
            };
            });
    };
    render()
    {
        return (
           
            <div >
       <h1>Counter:{this.state.count} </h1>
       <button onClick={this.handleAttack} style={{ width: "200px" }}>+1</button>
                <button onClick={this.handleDefence} style={{ width: "200px" }}>-1</button>
                  <button onClick={this.handleReset} style={{ width: "200px" }}>Reset</button>
          </div>


       )

    }
}

