import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        }
    }
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt="avatar"/>
                <div>
                    <div className="name">{this.props.name}</div>
    
                    <div className="status">
                    
                        <span
                        onClick={event => {
                            const newOnline = !this.state.online;
                            this.setState({ online: newOnline });}}
                
                        className={this.state.online ? "status-online" : "status-offline"} />
                        <span className="status-text">{this.state.online ? "Online" : "Offline"}</span>
    
                    </div>
                </div>
            </div>
        );
    }
}



export default Contact;
