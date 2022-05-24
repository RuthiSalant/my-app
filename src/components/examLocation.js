import React from 'react';
import '../css/test.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postQuestion, getAllQuestions, postLocation } from '../api/question'
import { Accordion, AccordionTab } from 'primereact/accordion';
import '../css/testDetails.css';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primeicons/primeicons.css';
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';

export function ExamPlaces() {
    const [value3, setValue3] = useState(null);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [numExaminees, setNumExaminees] = useState(0);
    const [className, setClassName] = useState('');
  
  
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
  
    const addLoc=async()=>{
      await postLocation(location, className, date, numExaminees)
    }
  
    const renderFooter = (name) => {
      return (
        <div>
          <Button label="Add" icon="pi pi-check" onClick={() => {onHide(name);addLoc()} }autoFocus />
        </div>
      );
    }
  
    return (
  
      <div className="dialog-demo">
        <div className="card"></div>
  
        <Dialog visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter('displayResponsive')}>
  
          <div className="input-box">
            <label style={{ fontStyle: "normal", fontFamily: 'Franklin Gothic Medium', fontSize: '20px' }}>Exam location:  </label>
            <input id="list" required type="text" onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="input-box">
            <label style={{ fontStyle: "normal", fontFamily: 'Franklin Gothic Medium', fontSize: '20px' }}>Class:  </label>
            <input id="list" required type="text" onChange={(e) => setClassName(e.target.value)} />
          </div>
          <div className="input-box">
            <div className="field col-12 md:col-4">
              <label style={{ fontStyle: "normal", fontFamily: 'Franklin Gothic Medium', fontSize: '20px' }}>Exam date:  </label>
              <Calendar id="calendar" value={value3} onChange={(e) => setValue3(e.value)} className="p-invalid" />
            </div>
          </div>
          <div className="input-box">
            <label style={{ fontStyle: "normal", fontFamily: 'Franklin Gothic Medium', fontSize: '20px' }} >Number of examinees:  </label>
            <input required type="number" style={{ width: '100px' }} onChange={(e) => setNumExaminees(e.target.value)} />
          </div>
        </Dialog>
  
        {/* <button id="save" className="btn">Save</button> */}
        <button id="Add_question" className="btn" onClick={() => onClick('displayResponsive')}>Add exam locaion</button>
      </div>
    )
  }
  