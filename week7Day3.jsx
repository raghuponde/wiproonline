
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


