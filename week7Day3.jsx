
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
