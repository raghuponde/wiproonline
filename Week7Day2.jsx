create a new app here with the command in any folder

npx create-react-app crudoperations

Then do the intial setup of the application means removing all files etc 

so after doing intial set up   paste this code in index.html file 

create one layout folder and in that add Header.jsx file and Footer.jsx file 

index.html
***********
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

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <title>React App</title>
  </head>
  <body style="background-color: black;">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    
  </body>
</html>
Now create one folder which is Components and in that Components create subfolders one is Layout and another ContactPages and define Header in 
    Layout like this below and footer also in layout 
Header.jsx 
************
import logo from "../../images/logo512.png";

function Header() {
  return (
    <div className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
          <span className="h2 pt-4 m-2 text-white-50">
             Crud Operations 
          </span>
    </div>
  );
}

export default Header;

Footer.jsx 
 ----
const Footer = ()=> {
return (
<div
style={{
color: "gray",
marginTop: "10px",
borderTop: "1px solid #555",
textAlign: "center",
}}
>
</div>
);
};
export default Footer;
Index.jsx 
 ********

import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './Components/Layout/Header'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
  </div>
);



Now add some page in ContactPages folder 

    AddContact.jsx 
    AddRandomContact.jsx 
    Contact.jsx 
    ContactIndex.jsx 
    GeneralContacts.jsx 
    FavoriteContacts.jsx 
    RemoveAllContacts.jsx 

RemoveAllContacts
**********************************
const RemoveAllContacts = () => {
return (
<div>
<button className="btn btn-danger form-control">Remove All</button>
</div>
);
};
export default RemoveAllContact;
GeneralContacts
****************************************
const GeneralContacts = () => {
return (
<div>
<button className="btn btn-secondary form-control">
General Contact
</button>
</div>
);
};
export default GeneralContacts;
FavoriteContacts
*****************
const FavoriteContacts = () => {
return (
<div>
<button className="btn btn-secondary form-control">
Favorite Contacts
</button>
</div>
);
};
export default FavoriteContacts;
Contact
**********************
const Contact = () => {
return (
<div>
<button className="btn btn-secondary form-control">Contact</button>
</div>
);
};
export default Contact;
AddRandomContact
******************
const AddRandomContact = () => {
return (
<div>
<button className="btn btn-danger form-control">
Add Random Contact
</button>
</div>
);
};
export default AddRandomContact;
AddContact
***********************
const AddContact = () => {
return (
<div>
<button className="btn btn-secondary form-control">Add Contact</button>
</div>
);
};
export default AddContact;



    











    
