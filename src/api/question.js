
export async function postQuestion(question, answer) {

    var question = {
        question: question,
        answer: answer
    }

   await fetch('http://localhost:4000/question/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(question)
    }
    ).then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            alert(`error: ${error}`);
        })
}

export async function getAllQuestions() {
    var response=await fetch(`http://localhost:4000/question`)
     var res;
     if (response.ok)
     res=response.json();
    return res;
  }




export async function postLocation(location,className,date,numOfExaminees) {

    var examLocation = {
        location: location,
        className:className,
        date: date,
        numOfExaminees:numOfExaminees
    }
debugger
  await  fetch('http://localhost:4000/examLocation/', {
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
