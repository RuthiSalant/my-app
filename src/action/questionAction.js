const question = 'QUESTION';

export default function questionInAction(response) {
    debugger
    var question = {
        option : response.option,
        question: response.question,
        answer: response.answer,
        _id: response._id
    }
    return {
        type: 'QUESTION',
        question
    }
}
