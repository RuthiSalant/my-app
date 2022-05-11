
export function GetUserByNamePassword(name,password) {
  // var name = document.getElementById("name").value;
  // var password = document.getElementById("password").value
  fetch(`http://localhost:4000/user/${name}/${password}`)
    .then(response => {
      if (response.status===200 && response.ok) {     
        return response.json();
      }
    })
    .then(data => {
      alert(`Hello ${data.name}`);
    }).catch((error) => {
      alert(`error: ${error}`);
    })
}

export function getPassByEmail(email) {
  fetch(`http://localhost:4000/user/${email}`)
    .then(response => {
      if (response.status===200 && response.ok) {
        return response.json();
      }
    })
    .then(password => {
      document.getElementById("password").value=password;
    })
    .catch((error) => {
      alert(`error: ${error}`);
    })
}


export function postUser(newName, newPassword, newEmail, newId, newPhone) {
  // var user = {
  //   name: document.getElementById("newName").value,
  //   password: document.getElementById("newPassword").value,
  //   email: document.getElementById("newEmail").value,
  //   id: document.getElementById("newId").value,
  //   phone: document.getElementById("newPhone").value
  // }
  var user={
    name:newName,
    password:newPassword,
    email:newEmail,
    id:newId,
    phone:newPhone
  }

  fetch('http://localhost:4000/user/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }
  ).then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      alert(`error: ${error}`);
    })}


