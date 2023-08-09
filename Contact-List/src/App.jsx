import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
// import SelectedContact from "./components/SelectedContact";
// import ContactRow from "./components/ContactRow";

export default function App() {
    const [selectedContactId, setSelectedContactId] = useState(null);
  
    return (
      <>
        { selectedContactId ? (
        //   <div>Selected Contact View</div>
          <SelectedContact
          myId={selectedContactId}
          pickMyId={setSelectedContactId}
          />
        ) : (
          <ContactList chosenId={setSelectedContactId} />
        )}
        </>
    )
  }

// <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}  />
// <ContactList setSelectedContactId={setSelectedContactId}  />

// ID which contact to render
// A ne component fir a detail view
// Fetching a single Id
