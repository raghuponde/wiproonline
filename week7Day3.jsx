
now i will add the logic for delete so from favourites and genral contacts the proeprty will have one method so using props it will go till contact 
means from contact index to fvaorites and general and then it will go contact 

In Contact Index 
----------------
  deleteContact={this.handleDeleteContact}  apply to both favorites and geenral and method defineed abobe render 


handleDeleteContact = (contactId) => {
this.setState((prevState) => {
return {
contactList: prevState.contactList.filter((obj) => {
return obj.id !== contactId;
}),
};
});
};

for favorites and general 
---------------------------
  deleteContact={props.deleteContact}


for contact 
-------------
  <button className="btn btn-danger btn-sm m-1">
<i
className="bi bi-trash-fill"
onClick={() => props.deleteContact(props.contact.id)}
style={{ fontSize: "1rem" }}
></i>
</button>



in contacts another way to write instead of inline 
---------------------------------------------------
import { Faker } from "@faker-js/faker";

const Contact = (props) => {
    function handleDeleteClick (contactId) {
    props.deleteContact(contactId);  // Call the deleteContact function passed from props
  };
return (
<div
className="row p-md-2 mb-2"
style={{ borderRadius: "20px", border: "1px solid #555" }}
>
<div className="col-2 col-md-1 pt-2 pt-md-1">
<img
src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
style={{ width: "80%" }}
alt=""
/>
</div>
<div className="col-6 col-md-5 text-warning pt-0">
<span className="h4">{props.contact.name}</span>
<br />
<div className="text-white-50">
{props.contact.email}
<br />
{props.contact.phone}
</div>
</div>
<div className="col-2 col-md-2 pt-md-3">
<button
className={`btn btn-sm m-1 ${
props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"
}`}
onClick={() => props.favoriteClick(props.contact)}
>
<i className="bi bi-star" style={{ fontSize: "1rem" }}></i>
</button>
</div>
<div className="col-2 col-md-3 pt-md-3">
<button className="btn btn-primary btn-sm m-1">

<i className="bi bi-pencil-square" style={{ fontSize: "1rem" }}></i>
</button>
<button className="btn btn-danger btn-sm m-1">
<i
className="bi bi-trash-fill"
onClick={()=>handleDeleteClick(props.contact.id)}
style={{ fontSize: "1rem" }}
></i>
</button>
</div>
</div>
);
};
export default Contact;

Now i want to add user from a web api for that axios i will be using first in conatct index 
-------------------------------------------------------------------------------------------
  handleAddRandomContact={this.handleAddRandomContact}  (for AddRanmdomContact in contact index ) 

and code for the method is 

handleAddRandomContact = (newContact) => {
const newFinalContact = {
... newContact,
id: this.state.contactList[this.state.contactList.length - 1].id + 1,
isFavorite: false,
};
this.setState((prevState) => {
return {
contactList: prevState.contactList.concat([newFinalContact]),
};
});
};

so herewhat i am doing is that this above method will be called inside another method of add random contact method and there one web api will be called 
now frist install this in command 
npm install axios

then create one folder in project Utitlity and in add ome file api.jsx 
api.jsx 
---------
import axios from "axios";
const getRandomUser = async () => {
const response = await axios.get(
"https://random-data-api.com/api/v2/users?size=2&is_xml=true",
{
headers: {},
params: {
size: 1,
},
}
);
return response;
};
export { getRandomUser };

now come to Addrandom contact 
-------------------------------
  partial code to check whether i am getting the user or not 

import { getRandomUser } from "../../Utility/api";
const GetRandomContact = async () => {
const responseFromAPI = await getRandomUser();
console.log(responseFromAPI);
};
const AddRandomContact = () => {
return (
<div>
<button
className="btn btn-success form-control"
onClick={() => GetRandomContact()}
>
Add Random Contact
</button>
</div>
);
};
export default AddRandomContact;

after chekcing in console log user i am getting or not 
---------------------------------------------------------
complete code 
-----------------
import { getRandomUser } from "../../Utility/api";
const GetRandomContact = async (props) => {
const responseFromAPI = await getRandomUser();
console.log(responseFromAPI);
return props.handleAddRandomContact({
name:
responseFromAPI.data.first_name + " " + responseFromAPI.data.last_name,
email: responseFromAPI.data.email,
phone: responseFromAPI.data.phone_number,
});
};
const AddRandomContact = (props) => {
return (
<div>
<button
className="btn btn-success form-control"
onClick={() => GetRandomContact(props)}
>
Add Random Contact
</button>

</div>
);
}

export default AddRandomContact;


Now i will write code for remove all contact 
------------------------------------------
  handleRemoveAllContact = () => {
this.setState((prevState) => {
return {
contactList: [],
};
});
};

render() {
return (
<div>
<Header />
<div className="container" style={{ minHeight: "85vh" }}>
<div className="row py-3">
<div className="col-4 offset-2 row">
<AddRandomContact
handleAddRandomContact={this.handleAddRandomContact}
/>
</div>
<div className="col-4 row">
<RemoveAllContact
handleRemoveAllContact={this.handleRemoveAllContact} 
/>
</div>

Then go to remove all contacts 
  ---------------------------

  const RemoveAllContact = (props) => {
return (
<div>
<button
className="btn btn-danger form-control"
onClick={() => props.handleRemoveAllContact()}
>
Remove All
</button>
</div>
);
};
export default RemoveAllContact;

Now update i want to do 
  --------------------------
  two proeprties add it to array contactList 

  ],
selectedContact: undefined,
isUpdating: false,

  Add ths tp favorites and general in contact index 

  updateClick={this.handleUpdateClick}

  and the code for the method written above render () mehtod

  handleUpdateClick = (contact) => {
console.log(contact);
this.setState((prevState) => {
return {
selectedContact: contact,
isUpdating: true,
};
});
};


in the fav and geebral 

  updateClick={props.updateClick}

  fnally in contact 

  <div className="col-2 col-md-3 pt-md-3">
<button className="btn btn-primary btn-sm m-1">
<i
className="bi bi-pencil-square"
onClick={() => props.updateClick(props.contact)}
style={{ fontSize: "1rem" }}
></i>
</button>

In the contact Index 
---------------------
    add these proerties to Addcontact element 

    isUpdating={this.state.isUpdating} 
selectedContact={this.state.selectedContact} 
cancelUpdateContact={this.handleCancelUpdateContact}

    In Contact Index 
    ------------------
    handleCancelUpdateContact = (contact) => {
console.log(contact);
this.setState((prevState) => {
return {
selectedContact: undefined,
isUpdating: false,
};
});
};

Next go to Add contact 

    Add contacts.jsx 
    -------------------
    import React from "react";
class AddContact extends React.Component {
constructor(props) {
super(props);
this.state = {
errorMessage: undefined,
successMessage: undefined,
};
}
//chnage done added one function
handleCancel = () => {
this.props.cancelUpdateContact();
};
handleAddContactFormSubmit = (e) => {
e.preventDefault();
const name = e.target.elements.contactName.value.trim();
const email = e.target.elements.contactEmail.value.trim();
const phone = e.target.elements.contactPhone.value.trim();
const response = this.props.handleAddContact({
name: name,
email: email,
phone: phone,
});
if (response.status == "success") {
this.setState({ errorMessage: undefined, successMessage: response.msg
});
document.querySelector(".contact-form").reset();
} else {
this.setState({ errorMessage: response.msg, successMessage: undefined
});
}
};
render() {
return (
<div className="border col-12 text-white p-2">
<form
onSubmit={this.handleAddContactFormSubmit}
className="contact-form"
>
<div className="row p-2">
<div className="col-12 text-white-50">
//change done
{this.props.isUpdating ? "Update Contact" : "Add a new Contact"}
</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Name..."
name="contactName"
//change done
defaultValue={
this.props.isUpdating ? this.props.selectedContact.name : ""
}
></input>
</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Email..."
name="contactEmail"
//change done
defaultValue={
this.props.isUpdating ? this.props.selectedContact.email :
""
}
></input>
</div>
<div className="col-12 col-md-4 p-1">
<input
className="form-control form-control-sm"
placeholder="Phone..."
name="contactPhone"
//change done
defaultValue={
this.props.isUpdating ? this.props.selectedContact.phone :
""
}
></input>
</div>
{this.state.errorMessage == undefined ? (
<div></div>
) : (
<div className="col-12 text-center text-danger">
{this.state.errorMessage}
</div>
)}
{this.state.successMessage == undefined ? (
<div></div>
) : (
<div className="col-12 text-center text-success">
{this.state.successMessage}
</div>
)}
// here in design lot of change done
<div
className={`col-12 p-1 ${
this.props.isUpdating
? "col-md-4 offset-md-2"
: "col-md-6 offset-md-3"
}`}
>
<button className="btn btn-primary btn-sm form-control">
{this.props.isUpdating ? "Update" : "Create"}
</button>
</div>
<div className="col-12 col-md-4 p-1">
{this.props.isUpdating && (
<button
className="btn btn-secondary form-control btn-sm"
onClick={this.handleCancel}
>
Cancel
</button>
)}
</div>
</div>
</form>
</div>
);
}
}
export default AddContact;



Finally i will add another event to add contact 

    handleUpdateContact={this.handleUpdateContact}

    and code for that write above render or return mehod 

    handleUpdateContact = (updatedContact) => {
console.log(updatedContact);
if (updatedContact.name == "") {
return { status: "failure", msg: "Please Enter a valid Name" };
} else if (updatedContact.phone == "") {
return { status: "failure", msg: "Please Enter a valid Phone Number" };
}
this.setState((prevState) => {
return {
contactList: prevState.contactList.map((obj) => {
if (obj.id == updatedContact.id) {
return {
... obj,
name: updatedContact.name,
email: updatedContact.email,
phone: updatedContact.phone,
};
}
return obj;
}),
isUpdating: false,
selectedContact: undefined,
};
});
return { status: "success", msg: "Contact was updated successfully" };
};

so in same add contacts i need to change the logic of addocnatct if updating one mehod is called otheriwse another mwrhod 

    handleAddContactFormSubmit = (e) => {
e.preventDefault();
const name = e.target.elements.contactName.value.trim();
const email = e.target.elements.contactEmail.value.trim();
const phone = e.target.elements.contactPhone.value.trim();
const id = e.target.elements.contactId.value.trim();
let response = undefined;
if (this.props.isUpdating) {
response = this.props.handleUpdateContact({
name: name,
email: email,
phone: phone,
id: id,
});
} else {
response = this.props.handleAddContact({
name: name,
email: email,

phone: phone,
});
}
if (response.status == "success") {
this.setState({ errorMessage: undefined, successMessage: response.msg
});
document.querySelector(".contact-form").reset();
} else {
this.setState({ errorMessage: response.msg, successMessage: undefined
});
}
};

add hidden field  after form tag 
 -------------------------------------
    <input
hidden
name="contactId"
defaultValue={
this.props.isUpdating ? this.props.selectedContact.id : ""
}
></input>

NOw i will work on new project where i will learn about life cycle methods of class compoent

    create a new project with name classlifecycle and do the intial adjustments for that inital adjustments code is below okay 

index.html
------------
<!DOCTYPE html>
<html lang="en">
index
<head>
<meta charset="utf-8" />
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<meta name="description" content="Web site created using create-react-app"
/>
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-
Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
crossorigin="anonymous" />
<script
src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js
"
integrity="sha384-
oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
crossorigin="anonymous"></script>
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
integrity="sha384-
IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk"
crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrapicons@
1.10.2/font/bootstrap-icons.css" />
<title>React App</title>
</head>
<body style="background-color: black">
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>
</html>
index.js
-------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<Header />
</div>
);
Header.jsx
--------------

import logo from "./images/logo512.png"
function Header() {
return (
<div className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
<img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }}
/>
<span className="h2 pt-4 m-2 text-white-50">
CycleOPedia
</span>
</div>
);
}
export default Header;


Add one class with the name CyclOPediaClassPage.jsx file in src folder now i want to read one
user from api like earlier and display list of students for the course so we have to install axios
now again as i am calling a web api method over here okay
npm install axios
create folder Utility and in that api. Jsx again same as earlier do it first okay

api.jsx
**********
import axios from "axios";
const getRandomUser = async () => {
const response = await axios.get(
"https://random-data-api.com/api/v2/users?size=2&is_xml=true",
{
headers: {},
params: {
size: 1,
},
}
);
return response;
};
export { getRandomUser };
CyclOPediaClassPage.jsx
***********************
import React from "react";
import { getRandomUser } from "./Utility/api";
class CyclOPediaClassPage extends React.Component {
constructor(props) {
super(props);
this.state = {
instructor: undefined,
studentList: [],
studentCount: 0,
hideInstructor: false,
};
}
componentDidMount = async () => {
console.log("Component Did Mount");
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
};
componentDidUpdate() {
console.log("Component Did Update");
}
componentWillUnmount() {
console.log("Component Will UnMount");
}
render() {
console.log("Render Component");
return (
<div>
{this.state.instructor && (
<div className="p-3">
<span className="h4 text-success">Instructor</span>
<i className=" bi bi-toggle-off btn btn-success btn-sm"></i>
<br />
Name: {this.state.instructor.name} <br />
Email : {this.state.instructor.email}
<br />
Phone : {this.state.instructor.phone}
<br />
</div>
)}
</div>
);
}
}
export default CyclOPediaClassPage;
index.jsx
**********
import React from "react";
import ReactDOM from "react-dom/client";
import CyclOPediaClassPage from "./CyclOPediaClassPage";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<div>
<Header />
<div className="row text-white">
<div className="col-6">
<span className="h1 text-warning text-center">Class Component</span>
<CyclOPediaClassPage />
</div>
</div>
</div>
);

Now add two buttons one add student and remove all students 

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
// and then in render method add these things
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
</div>
// add above lines after this in earlier code
Phone : {this.state.instructor.phone}
<br />
</div>
)}

  

check in browser console.log how update is called again and again adn how did mount is called u need  to analize this 

Now i want to create a controlled component means when ever i am typing some thing in text
box then the value which i am typing in text box should be stored in state automatically means
something two way binding i want to do okay
now add two properties one in state like this inputName and inputFeedback

class CyclOPediaClassPage extends React.Component {
constructor(props) {
super(props);
this.state = {
instructor: undefined,
studentList: [],
studentCount: 0,
hideInstructor: false,
inputName: "",
inputFeedback: "",
};
}

so these properties here in this if i type whatever here in state same should reflect in text box

which will binding from state to view

Before that add two text boxes in design like this after same after phone code okay like earlier

<div className="p-3">
<span className="h4 text-success">Feedback</span>
<br />
<input
type="text"
value={this.state.inputName}
placeholder="Name.."
></input>
<br />
<textarea
value={this.state.inputFeedback}
placeholder="Feedback..."
></textarea>
</div>


now i can see the output like this


    
    







    



