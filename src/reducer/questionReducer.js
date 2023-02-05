let option = {
    optionText:"",
    correct : Boolean
};
const initialState ={
    
    question:{
    questionText:"",
    answer: [option],
    _id:""
  }

}

console.log(initialState,"initialState");

const questionReducer= (state=initialState, action) => {
    debugger
    console.log("action",action);
switch (action.type) {
    case 'QUESTION':            
        return {...state,question: action.question}
    default:
        return state
}
}

export default questionReducer;
