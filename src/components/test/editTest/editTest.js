import React from 'react';
import '../../../css/test.css';
import { Button } from 'primereact/button';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { postQuestion, getAllQuestions, postLocation } from '../../../api/question'
import { Toast } from 'primereact/toast';
import { Accordion, AccordionTab } from 'primereact/accordion';
import '../../../css/testDetails.css';
import { Calendar } from 'primereact/calendar';
import 'primeicons/primeicons.css';
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Question } from './questions';
import { ExamPlaces } from './examLocation';
import { postTest } from '../../../api/tests'
import { deleteQuestion, updateQuestion } from '../../../api/question';
import store from '../../../store'
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';

export function Test() {
  const [date, setDate] = useState(null);
  const [description,setDescription]=useState("");
   const user= store.getState();

  function saveTest(props) {
    debugger
    // console.log('user',user);
      postTest(user._id,date,props.question,props.location);
    // postTest(user._id, date, description, question, location);
  }
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
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
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
      <Button style={{ backgroundColor: 'white', color: '#313131' }} onClick={saveTest}><b>Save</b></Button>
    </div>
  )
}

export function ShowQuestions() {
  const [value2, setValue2] = useState('');
  const toast = useRef(null);
  const [question, setQuestion] = useState([]);
  const [questionId, setQuestionId] = useState("");

  const accept = (id) => {
    setQuestionId(id)
    deleteQuestion(id)
    const removeArr = question.map(q => q._id !== questionId)
    console.log('removeArr', removeArr);
    // setQuestion(removeArr);
    toast.current.show({ severity: 'info', summary: 'Deleted!', detail: 'The test deleted successfully !', life: 3000 });
  }

  const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'The test was not deleted', life: 3000 });
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:4000/question`)
      var res
      if (response.ok) {
        res = await response.json();
      }
      // console.log('res',res); 
      setQuestion(res)
    }
    fetchData();
  }, [question]
  )
  const confirm2 = (event) => {
    debugger
    confirmPopup({
      target: event.currentTarget,
      message: 'Do you want to delete this question?',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept,
      reject
    });
  };
  const aaa = () => {
    <Question />
  }
  const result = Object.values(question).map(value => {
    return (
      <div>
        <div className="box">
          <ConfirmPopup />
          <h3><i class="pi pi-pencil" onClick={aaa}></i>
            <i class="pi pi-trash" onClick={() => { setQuestionId(value._id); accept(value._id) }}></i>{value.question}</h3>
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
      {/* <Test question={question}/> */}
    </div>
  )
}

export function ShowExamsLocations() {
  const [location, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:4000/examLocation`)
      var res
      if (response.ok)
        res = await response.json();
      setLocations(res)
    } fetchData()
  }, [location]
  )

  const result = Object.values(location).map(value => {
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
      {/* <Test location={location} /> */}
    </div>
  )
}
