


 export async function showTest(id){
  var response=await fetch(`http://localhost:4000/test/${id}`)     
   var res;
   if (response.ok)
   res=response.json();
else
res=null
  return res;
}


export async function postTest(manufacturingDate, description,questions,examLocation) {

  var test = {
    manufacturingDate: manufacturingDate,
    description: description,
    questions:questions,
    examLocation:examLocation
  }

 await fetch('http://localhost:4000/test/', {
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

