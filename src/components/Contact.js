import React from 'react';
import './Contact.css';



function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="avatar"/>
            <div>
                <div className="name">{props.name}</div>

                <div className="status">
                
                <span className={props.online ? "status-online" : "status-offline"} />
                <span className="status-text">{props.online ? "Online" : "Offline"}</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
