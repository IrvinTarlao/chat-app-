import React from "react";
import Contact from './Contact'



const contacts = [
    {
        name: "Savannah Olson",
        avatar: "https://randomuser.me/api/portraits/women/48.jpg",
        online: true,
    },

    {
        name: "Darlene Shaw",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        online: false,
    },

    {
        name: "Roger Oliver",
        avatar: "https://randomuser.me/api/portraits/men/90.jpg",
        online: false,
    },

    {
        name: "Kim Lawson",
        avatar: "https://randomuser.me/api/portraits/women/48.jpg",
        online: true,
    },

    {
        name: "Ellen Mendoza",
        avatar: "https://randomuser.me/api/portraits/women/0.jpg",
        online: false,
    },
];

const ContactList = () => (
    <div>
      {contacts.map(item => (
    <Contact name={item.name} avatar={item.avatar} online={item.online} key={item.name} />
  )
      )}
    </div>
  );
  
  export default ContactList;