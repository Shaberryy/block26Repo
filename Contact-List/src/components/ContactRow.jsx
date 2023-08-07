import ContactList from "./contactlist";


// export default function ContactRow({ contact }) {
//   return (
//     <tr>
//       <td>{contact.name}</td>
//       <td>{contact.email}</td>
//       <td>{contact.phone}</td>
//     </tr>
//   );
// }

export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}