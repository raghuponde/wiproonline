
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




















