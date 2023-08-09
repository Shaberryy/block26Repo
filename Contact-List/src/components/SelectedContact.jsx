import {useState, useEffect } from "react"

export default function SelectedContact({
    pickMyId, 
    myId
}) {
const [contact, setContacts] = useState({})
useEffect(() => {
    async function fetchSelecctedContact() {
     try{
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${myId}`)
        const result = await response.json()
        setContacts(result)
    }catch (error) {
        console.error(error)
    }
}
fetchSelecctedContact()
}, [])
  return (
    <div >
        <p>
            <b>Name:</b> {contact.name}
        </p>
        <p>
            <b>Email:</b> {contact.email}
        </p>
        <p>
            <b>Phone:</b> {contact.phone}
        </p>
        <p>
            <b>Adress:</b> {contact.adress}
        </p>
    </div>

  )
}
