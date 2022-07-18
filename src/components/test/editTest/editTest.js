import React from 'react';
import '../../../css/test.css';
import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { postQuestion, getAllQuestions, postLocation } from '../../../api/question'
import { Accordion, AccordionTab } from 'primereact/accordion';
import '../../../css/testDetails.css';
import { Calendar } from 'primereact/calendar';
import 'primeicons/primeicons.css';
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Question } from './questions';
import { ExamPlaces } from './examLocation';

export function Test() {
  const [date, setDate] = useState(null);

  return (
    <div className="accordion-demo">
      <div style={{ height: '10vh' }}></div>
      <div className='text'>Let's create the test</div>
      <br></br>
      <Accordion className="accordion-custom" activeIndex={0}>
        <AccordionTab header={<React.Fragment><i className="pi pi-calendar"></i><span>Test</span></React.Fragment>}>
          <div className="input-box">
            <div className="field col-12 md:col-4">
              <label className='text'>Date: </label>
              <Calendar id="calendar" value={date} onChange={(e) => setDate(e.target.value)} className="p-invalid" />
            </div>
          </div>
          <div className="input-box">
            <label className='text'>Description:  </label>
            <input type="text"></input>
          </div>
        </AccordionTab>
        <AccordionTab header={<React.Fragment><i className="pi pi-pencil"></i><span>Questions</span></React.Fragment>}>

          <Question></Question>
          <ShowQuestions ></ShowQuestions>

        </AccordionTab>
        <AccordionTab header={<React.Fragment><i className="pi pi-map"></i><span>Exam places</span></React.Fragment>}>
          <ExamPlaces></ExamPlaces>
          <ShowExamsLocations></ShowExamsLocations>

        </AccordionTab>
      </Accordion>
      <Button style={{ backgroundColor: 'white', color: '#313131' }}><b>Save</b></Button>
    </div>
  )
}

export function ShowQuestions() {
  const [value2, setValue2] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:4000/question`)
      var res
      if (response.ok)
        res = await response.json();
      console.log(res);
      setData(res)
    } fetchData()
  }, [data]
  )

  const result = Object.values(data).map(value => {
    return (
      <div>
        <div className="box">
          <h3>{value.question}</h3>
          <p><b>1. </b>{value.answer[0].option}</p>
          <p><b>2. </b>{value.answer[1].option}</p>
          <p><b>3. </b>{value.answer[2].option}</p>
        </div>
        <br></br> <br></br> <br></br>
      </div>
    )
  });
  return (
    <div>
      <ScrollTop />
      <ScrollPanel style={{ width: '450px', height: '400px' }}>
        <div>{result}</div>
        <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-arrow-up" />
      </ScrollPanel>
    </div>
  )
}

export function ShowExamsLocations() {
  const [locaions, setLocations] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:4000/examLocation`)
      var res
      if (response.ok)
        res = await response.json();
      console.log(res);
      setLocations(res)
    } fetchData()
  }, [locaions]
  )

  const result = Object.values(locaions).map(value => {
    return (
      <div>
        <div className="box">
          <h3>{value.location}</h3>
          <p><b>class: </b>{value.className}</p>
          <p><b>date: </b>{value.date}</p>
          <p><b>numOfExaminees: </b>{value.numOfExaminees}</p>
        </div> <br></br> <br></br> <br></br>
      </div>
    )
  });

  return (
    <div>
      <ScrollTop />
      <ScrollPanel style={{ width: '450px', height: '400px' }}>
        <div>{result}</div>
        <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-arrow-up" />
      </ScrollPanel>
    </div>
  )
}
