import React from 'react';
import './App.css';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact avatar='https://randomuser.me/api/portraits/women/31.jpg' name="Carolyn Gonzalez" online={false} />
      <Contact avatar='https://randomuser.me/api/portraits/women/12.jpg' name="Lucy Fuller" online={true} />
      <Contact avatar='https://randomuser.me/api/portraits/women/67.jpg' name="Audrey Crawford" online={true} />

    </div>
  );
}

export default App;
