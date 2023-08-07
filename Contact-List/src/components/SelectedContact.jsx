import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import ContactRow from "./components/ContactRow";

export default function SelectedContact() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
        // <ContactRow/>
      )}
    </>
  );
}
export default SelectedContact;