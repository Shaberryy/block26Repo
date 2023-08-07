import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import ContactRow from "./components/ContactRow";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (<SelectedContact selectedContactId ={selectedContactId}/>
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
        // <ContactRow/>
      )}
    </>
  );
}
export default App;


<SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}  />
<ContactList setSelectedContactId={setSelectedContactId}  />