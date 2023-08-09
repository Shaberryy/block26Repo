import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];
export default function ContactList({ chosenId }) {
  // const [contacts, setContacts] = useState(dummyContacts);
  const [contact, setContact] = useState([]);
  console.log(contact);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        // logic
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  return (
    
    <>

      <table>
        <thead>
          {/* <h1>Contact List</h1> */}
          <tr>
            <th colSpan="3">Hit List :3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contact.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                pickId={chosenId}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
