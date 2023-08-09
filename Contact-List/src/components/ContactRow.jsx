import ContactList from "./contactlist";


export default function ContactRow({ contact, pickId }) {
  return (
    <tr onClick={()=>{
      pickId(contact.id)
    }}>
      
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
