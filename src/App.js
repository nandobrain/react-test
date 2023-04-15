import React from 'react';
import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState([
    {
      
      name: 'Fernando',
      role: 'Developer',
      img: "https://i.imgur.com/IR4SbPi.jpg",
    },
    {
      name: 'Mike',
      role: 'Developer',
      img: "https://i.imgur.com/hpEF0KJ.jpg",
    },
    {
      name: 'Victoria',
      role: 'doc',
      img: "https://i.imgur.com/Yw7BKMX.jpg",
    },
    {
      name: 'Taylor',
      role: 'owner',
      img: "https://i.imgur.com/okVG62B.jpg",
    },
    {
      name: 'Rex',
      role: 'security',
      img: "https://i.imgur.com/IR4SbPi.jpg",
    },
    {
      name: 'Jesse',
      role: 'Developer',
      img: "https://i.imgur.com/ojtreYh.jpg",
    },
  ])
  
  const showEmployees = true;
    return (
      <div className="App">
       

        {showEmployees ? (
        <>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value)
        }}/>

        <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              
              return (
                <Employee 
                  key={uuidv4()} 
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                />
              );  
            })}
        
        </div>
        </>
          )  : (
          <p>You cannot see the employees</p>

       ) }
      </div>
    );
}

export default App;
