import React from 'react';
import './App.css';
import Employee from './components/employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev')
  
  const showEmployees = true;
    return (
      <div className="App">
       

        {showEmployees ? (
        <>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value)
        }}/>
          <Employee name="fernando" role="intern"/>
          <Employee name="aby" />
          <Employee name="mike" />
        </>
          )  : (
          <p>You cannot see the employees</p>

       ) }
      </div>
    );
}

export default App;
