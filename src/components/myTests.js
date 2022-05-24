import React, { useEffect, useState } from 'react';
import '../css/myTests.css';
import { useNavigate } from "react-router-dom"
import { showTest } from '../api/tests';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primeicons/primeicons.css';
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Editor } from 'primereact/editor';
import { ShowTest } from './showTest';

export function TestList() {

    const [data, setData] = useState('');
    const [dataTest, setDataTest] = useState('');
    const [testId, setTestId] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/test`)
            var res
            if (response.ok)
                res = await response.json();
            console.log(res);
            setData(res)
        } fetchData()
    }, []
    )

    const navigate = useNavigate();
    const creatTest = () => {
        navigate("/editTest")
    }



    async function aaa(id){   
        var a=await showTest(id);
        if(a){
        console.log(a);
        navigate("/showTest")
     }
        else
        alert("there is no test")
     }

     const result = Object.values(data).map(value => {
        return(
            <div>      
                  <ShowTest ></ShowTest>

       <div id={value._id} onClick={(e)=>aaa(e.target.id)}   style={{ border: '2px solid #686565', width:'40%' ,textAlign: 'center'}} >
           <h3>{value.description} {value.manufacturingDate}</h3>
         <br></br></div>
         </div>
     )} );
    return (
        <div >
            <div className="pen-title">
                <h1>My Tests</h1>
            </div>
                <div >{result}</div>



            {/* <ScrollTop />

            <ScrollPanel style={{ width: '450px', height: '400px' }}>

                <ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-arrow-up" />
            </ScrollPanel> */}
          <p>  <button className='newTest' onClick={creatTest}>New Test</button></p>
        </div>
    )

}

//     const portPdf = () => {
//       import('jspdf').then(jsPDF => {
//           import('jspdf-autotable').then(() => {
//               const doc = new jsPDF.default(0, 0);
//               doc.autoTable(exportColumns, products);
//               doc.save('products.pdf');
//           })
//       })
//   }

export function EditorDemo  () {

    const [text1, setText1] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    }

    const header = renderHeader();

    return (
        <div>
            

                <h5>Default</h5>
                <Editor style={{ height: '320px' }} value={text1} onTextChange={(e) => setText1(e.htmlValue)} />

        </div>
    );
}