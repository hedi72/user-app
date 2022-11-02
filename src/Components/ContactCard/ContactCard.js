import React from "react";
import avatar from "../../images/avatar.jpg";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  return (
    <div>
      {/* {console.log(contact.id)} */}
      <img src={avatar} alt="profilPic" />
      <h4>{contact.name}</h4>
      <h4>{contact.email}</h4>
      <h4>{contact.phone}</h4>
      <Link to={{ pathname: "/profil", state: { contact: contact } }}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default ContactCard;
