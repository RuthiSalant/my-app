import React from 'react';
import '../../../css/test.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postQuestion, getAllQuestions } from '../../../api/question'
import { postLocation, } from '../../../api/examLocation'
import { Accordion, AccordionTab } from 'primereact/accordion';
import '../../../css/testDetails.css';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primeicons/primeicons.css';



export function Question() {
  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [position, setPosition] = useState('center');
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [correctA, setCorrectA] = useState(false);
  const [correctB, setCorrectB] = useState(false);
  const [correctC, setCorrectC] = useState(false);


  const dialogFuncMap = {
    'displayResponsive': setDisplayResponsive
  }

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);
    if (position) {
      setPosition(position);
    }
  }

  const onHide = async (name) => {
    dialogFuncMap[`${name}`](false);


  }
  async function addQue() {
    let answer = [];
    answer.push({ option: optionA, correctAnswer: correctA });
    answer.push({ option: optionB, correctAnswer: correctB });
    answer.push({ option: optionC, correctAnswer: correctC });
    await postQuestion(question, answer);
  }

  const renderFooter = (name) => {
    return (
      <div>
        <Button label="Add" icon="pi pi-check" onClick={() => { onHide(name); addQue() }} autoFocus />
      </div>
    );
  }

  return (

    <div className="dialog-demo">
      <div className="card"></div>
      <button id="Add_question" className="btn" onClick={() => onClick('displayResponsive')}>Add question</button>
      <Dialog visible={displayResponsive} onHide={() => onHide('displayResponsive')} style={{ width: '50vw' }} footer={renderFooter('displayResponsive')}>
        <div className="input-box" >
          <label style={{ fontStyle: "normal", fontFamily: 'Franklin Gothic Medium', fontSize: '20px' }}>Enter question   </label>
          <input id="list" required type="text" style={{ width: '600px' }} onChange={(e) => setQuestion(e.target.value)} />
        </div>
        <div className="input-box">
          <input id="list" required type="radio" style={{ width: '2vw' }} name='a' onChange={() => { setCorrectA(true); setCorrectB(false); setCorrectC(false) }} />
          <input id="list" required type="text" onChange={(e) => setOptionA(e.target.value)} />
          <label>Options A</label>
        </div>
        <div className="input-box">
          <input id="list" required type="radio" style={{ width: '2vw' }} name='a' onChange={() => { setCorrectB(true); setCorrectC(false); setCorrectA(false) }} />
          <input required type="text" onChange={(e) => setOptionB(e.target.value)} />
          <label>Options B</label>
        </div>
        <div className="input-box">
          <input id="list" required type="radio" style={{ width: '2vw' }} name='a' onChange={() => { setCorrectC(true); setCorrectB(false); setCorrectA(false) }} />
          <input required type="text" onChange={(e) => setOptionC(e.target.value)} />
          <label>Options C</label>
        </div>
      </Dialog>
    </div>
  )
}
