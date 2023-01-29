


export async function showTest(id) {
  var response = await fetch(`http://localhost:4015/test/${id}`)
  var res;
  if (response.ok)
    res = response.json();
  else
    res = null
  return res;
}


export async function postTest(userId,manufacturingDate, description, questions, examLocation) {

  var test = {
    userId:userId,
    manufacturingDate: manufacturingDate,
    description: description,
    questions: questions,
    examLocation: examLocation
  }

  await fetch('http://localhost:4015/test/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(test)
  }
  ).then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      alert(`error: ${error}`);
    })
}

export async function deleteTest(id) {
  await fetch(`http://localhost:4015/test/${id}`, {
  method: 'DELETE',
}).then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  alert(`error: ${error}`);
})
}
