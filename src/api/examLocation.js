

export async function postLocation(location,className,date,numOfExaminees) {

    var examLocation = {
        location: location,
        className:className,
        date: date,
        numOfExaminees:numOfExaminees
    }
debugger
  await fetch('http://localhost:4000/examLocation/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(examLocation)
    }
    ).then(response => response.json())
        .then(data => alert(`location: ${data.location} add sucssefully!!`))
        .catch((error) => {
            alert(`error: ${error}`);
        })
}

export async function getAllExamsLocation() {
    var response=await fetch(`http://localhost:4000/examLocation`)
     var res;
     if (response.ok)
     res=response.json();
    return res;
  }
