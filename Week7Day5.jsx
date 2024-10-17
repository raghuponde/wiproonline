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


index.js codde 
------------------
      import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Home from './Home';
import About from './About';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
         <Route path="/about" element={<About/>}></Route>

    </Routes>
    </BrowserRouter>
 </React.StrictMode>
  
);


then in Hdeader
      ----------
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
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
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

whnever i am clciking the links the paeg is refreshsing so chnage the code like this use { Link }

      Headder.jsx 
      ---------------
      import React from 'react'
import logo from "./images/logo512.png"; 
import { Link } from "react-router-dom";
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
      <Link className="nav-link active" aria-current="page" to="/">
Home
</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link active" aria-current="page" to="/about">
About
</Link>
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

now now i will add pages folder in src and in that four pages i will created and rfce also will do it for
that okay
what are those four pages 

      CreateProduct.jsx 
      Product.jsx 
      ProductDetails.jsx 
      ProductList.jsx 

      index.js file 
      ----------------
      import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import CreateProduct from "./Pages/CreateProduct";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import Product from "./Pages/Product";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/about" element={<About />}></Route>
<Route path="/product" element={<Product />}></Route>
<Route path="/product/create" element={<CreateProduct />}></Route>
<Route path="/product/details" element={<ProductDetails />}></Route>
<Route path="/product/list" element={<ProductList />}></Route>
</Routes>
</BrowserRouter>
</React.StrictMode>
);

      header.jsx 
      ----------
import React from "react";
import logo from "./images/logo512.png";
import { Link } from "react-router-dom";
function Header() {
return (
<div>
<nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
<div className="container-fluid">
<img
src={logo}
alt=""
style={{ height: "35px", verticalAlign: "top" }}
/>
<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse"
id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
<Link className="nav-link active" aria-current="page" to="/">
Home
</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/about">
About
</Link>
</li>
<li className="nav-item dropdown">
<a
className="nav-link dropdown-toggle"
href="#"
role="button"
data-bs-toggle="dropdown"
aria-expanded="false"
>
Product
</a>
<ul className="dropdown-menu">
<li>
<Link className="dropdown-item" to="/product">
Product
</Link>
</li>
<li>
<Link className="dropdown-item" to="/product/list">
Product List
</Link>
</li>
<li>
<Link className="dropdown-item" to="/product/create">
Product Create
</Link>
</li>
<li>
<Link className="dropdown-item" to="/product/details">
Product Details
</Link>
</li>
</ul>
</li>
<li className="nav-item">
<a className="nav-link disabled">Disabled</a>
</li>
</ul>
</div>
</div>
</nav>
</div>
);
}

export default Header;
Now i am doing nested routes and also if u type invalid route means * i will use here then notfound will be there 
Index.js (Nested Routes) 
---------------------------
      import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import CreateProduct from "./Pages/CreateProduct";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import Product from "./Pages/Product";
import NotFound from "./NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/about" element={<About />}></Route>
<Route path="product">
<Route path="" element={<Product />}></Route>
<Route path="create" element={<CreateProduct />}></Route>
<Route path="details" element={<ProductDetails />}></Route>
<Route path="list" element={<ProductList />}></Route>
</Route>
<Route path="*" element={<NotFound />}></Route>
</Routes>
</BrowserRouter>
</React.StrictMode>
);


Now I want to pass a paramter to the route and that parameter I want to dislay in the page aslso that paramter which u pased 

      add this route in index.js before product 

      <Route
path="/cryptodetail/:cryptoSymbol"
element={<CryptoDetail />}
></Route>


      go to Cryptodetails page 
      ----------------------
import React from "react";
import { useParams } from "react-router-dom";
function CryptoDetail() {
const { cryptoSymbol} = useParams();
return (
<div>
<h4>CryptoDetail</h4>
<p>Symbol : {cryptoSymbol}</p>
</div>
);
}
export default CryptoDetail;



header .jsx 
---------------
      above about you caan put this url 

      <li className="nav-item">
<Link className="nav-link" to="/cryptoDetail/BTC">
Crypto Detail
</Link>


More than  one paramer passing 
----------------


add another routte 

<Route
path="/cryptodetail/:cryptoSymbol/:id"
element={<CryptoDetail />}
></Route>

in crypto detail 
---------------
            import React from "react";
import { useParams } from "react-router-dom";
function CryptoDetail() {
const { cryptoSymbol, id } = useParams();
return (
<div>
<h4>CryptoDetail</h4>
<p>Symbol : {cryptoSymbol}</p>
<p>Id : {id}</p>
</div>
);
}
export default CryptoDetail;

Header 
-------
   same link modiefy 
  <li className="nav-item">
<Link className="nav-link" to="/cryptoDetail/BTC">
Crypto Detail
</Link>


Same kind of things i want to do for ProductDetails page 

        so changes 
index page nested route modify 
----------------------------------
<Route path="details/:productId" element={<ProductDetails />}>
</Route>

prodct Details page
***********************
import React from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
const { productId } = useParams();
return (
<div>
ProductDetails
<p> ID: {productId}</p>
</div>
);
}
export default ProductDetails;
//

url in Header 
-------------
        Modiy in header 
        <Link className="dropdown-item" to="/product/details/3">
Product Details
</Link>


Now goto product.jsx file and add two buttons 
-----------------------------------------------

import { useNavigate, Link } from "react-router-dom";
import React from "react";
function Product() {
const navigate = useNavigate();
return (
<div>
Product
<button
onClick={() => {
navigate("/product/create");
}}
>
Add Product{" "}
</button>
<Link to={`/product/details/5`}>
<button>Navigate to Product Detail - 5</button>
</Link>
</div>
);
}
export default Product;

            

using use state i can do th same so commented earleir code 
-----------------------------------------------------------
// import { useNavigate, Link } from "react-router-dom";
// import React from "react";
// function Product() {
// const navigate = useNavigate();
// return (
// <div>
// Product
// <button
// onClick={() => {
// navigate("/product/create");
// }}
// >
// Add Product{" "}
// </button>
// <Link to={`/product/details/5`}>
// <button>Navigate to Product Detail - 5</button>
// </Link>
// </div>
// );
// }
// export default Product;

import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

function Product() {
const navigate = useNavigate();
const [goToProduct, setGoToProduct] = useState(() => {
return false;
});
return (
<div>
Product
<button
onClick={() => {
navigate("/product/create");
}}
>
Add Product{" "}
</button>
<Link to={`/product/details/5`}>
<button>Navigate to Product Detail - 5</button>
</Link>
{goToProduct && <Navigate to="/product/details/3" />}
<button
onClick={() => {
setGoToProduct({ goToProduct: true });
}}
>
Navigate to Product -3 (UseState)
</button>
</div>
);
}
export default Product;





Now in the create Product i will add one button which is go back
so here -1 one step back -2 means two step back
create product 
--------------
import React from "react";
import { useNavigate } from "react-router-dom";
function CreateProduct() {
const navigate = useNavigate();
return (
<div>
CreateProduct
<button
onClick={() => {
navigate(-1);
}}
>
Go back
</button>
</div>
);
}
export default CreateProduct;

Now new project i am starting name is reduxdemo this redux is used for maintining state of the object 

Firrt do initial set up and create  and here what u have to do is in src folder 

create one folder with the name app and in that app folder two sub folders u create names are components and layout 
and in layout Header.jsx file will come and as usual in images folder images u keep it and i am givng you the code after intial set up 

index.html
*************
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
<link rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
/>
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min
.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrapicons@
1.10.2/font/bootstrap-icons.css" />
<title>React App</title>
</head>
<body class="m-0" style="background-color: black">
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>
</html>

Header.jsx
************
import React from "react";
import logo from "../../images/react.png";
function Header() {
return (
<div className="pt-3 pl-2">
<img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }}
/>{" "}
<span className="h2 pt-4 text-white-50">React Course -
ReduxOpedia</span>
</div>
);
}
export default Header;

Index.js
**********
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<Header />
</React.StrictMode>
);


        

        
      

      
