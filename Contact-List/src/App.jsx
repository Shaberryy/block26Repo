// import { useState } from 'react'
// import React from "react";
import "./App.css";
import ContactList from './contactlist';

// export default function ContactList() {
//   return (
//     <>
//       <table>
//         <thead>
//           {/* <h1>Contact List</h1> */}
//           <tr>
//             <th colSpan="3">Contact List</th>
//           </tr>
//         </thead>
//       <tbody>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Phone</td>
//         </tr>
//         {
//             // map data 
//         }
//       </tbody>
//       </table>
      
//     </>
//   );
// }
export default function App() {
    return(
    <>
    <ContactList/>
    </>
    );
}
// export default App