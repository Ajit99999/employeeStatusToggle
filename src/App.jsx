import { useState } from 'react'

import './App.css'
const employees = [
  {
    firstName: "ajit",
    lastName: "sahoo"
  },
  {
    firstName: "asit",
    lastName: "mishra"
  },
  {
    firstName: "amit",
    lastName: "bikram"
  }
];
function App() {
  const employeeStatus = employees.reduce((a, elem) => {
    const name = `${elem.firstName}${elem.lastName}`;
    a[name] = true;
    return a;
  }, {});
  const [status, setStatus] = useState(employeeStatus);
  return (
    <div className="App">
      <h1>  Employee Status Toggle  </h1>
     
      {employees?.map((elem) => {
        let name = `${elem.firstName}${elem.lastName}`;
        return (
          <div
            onClick={() => {
              setStatus({ ...status, [name]: !status[name] });
            }}
          >
            <p>
              Name: {elem?.firstName} {elem?.lastName}{" "}
            </p>

            <p> status :{status[name] ? "Online" : "Offline"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App
