import React from "react";
import { contactData } from "../../Constantes/ContactData";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = () => {
  return (
    <div>
      {contactData.map((person, i) => (
        <ContactCard key={i} contact={person} />
      ))}
    </div>
  );
};

export default ContactList;
