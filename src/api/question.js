
export async function postQuestion(question, answer) {

    var question = {
        question: question,
        answer: answer
    }
    
   await fetch('http://localhost:4000/question/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
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


