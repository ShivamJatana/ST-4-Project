import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Name from './name';
import './added.css';


export default function Added() {
  let history=useNavigate();
  history('/');

  return (
    <div className='background'>
    <h1>User Data</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
          </tr>

        </thead>
        <tbody>
          {
            Name.map((item)=>{
              return(
                <tr >
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
  )
}

