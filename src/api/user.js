import React from 'react';
import { useNavigate } from "react-router-dom"

export async function GetUserByNamePassword(name, password) {
  debugger
  await fetch(`http://localhost:4015/user/${name}/${password}`)
    .then(response => {
      if (response.status === 200 && response.ok) {
        return response.text();
      }
    })
    .then(data => {
      debugger
      if (data){
        console.log('userLogin',data);
        alert(`Hello ${JSON.parse(data).name}`);
        return data}
      else {
        alert("you does not exist! please register...")
      }
    })
    .catch((error) => {
      alert(`error: ${error}`);
    })
}

export async function getPassByEmail(email) {
  await fetch(`http://localhost:4015/user/${email}`)
    .then(response => {
      if (response.status === 200 && response.ok) {
        return response.json();
      }
    })
    .then(password => {
      document.getElementById("password").value = password;
    })
    .catch((error) => {
      alert(`error: ${error}`);
    })
}


// export async function postUser(newName, newPassword, newEmail, newId, newPhone) {
//   var user={
//     name:newName,
//     password:newPassword,
//     email:newEmail,
//     id:newId,
//     phone:newPhone
//   }
//   await fetch('http://localhost:4015/user/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(user)
//   }
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch((error) => {
//       alert(`error: ${error}`);
//     }))
//   }

export async function postUser(newName, newPassword, newEmail, newId, newPhone) {
  var res;
  var user = {
    name: newName,
    password: newPassword,
    email: newEmail,
    id: newId,
    phone: newPhone
  }
  debugger
  return await fetch(`http://localhost:4015/user/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }
  ).then(data => data.json())
    .then(response => {    
        alert("succes! hello "+response.name)
      return response;
    })
    .catch((error) => {
      alert(`error: ${error}`);
  })
}  // .then(data => console.log(data))
  // .catch((error) => {
  //   alert(`error: ${error}`);
  // })
  // await fetch('http://localhost:4015/user/', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(user)
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch((error) => {
  //     alert(`error: ${error}`);
  // })}
