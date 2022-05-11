import React from 'react';
import '../css/myTests.css';
import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom"

export function TestList() {
    // const history = useHistory()
    // const a=()=>{history.push("/test")    }
    return (

        <div >

        <nav role="navigation">
        <Link to="/">my course</Link>
        <Link to="/about">course</Link>
        </nav>
            <div className="pen-title">
                <h1>My Tests</h1>
            </div>
            <button className='newTest'>New Test</button>
        </div>
    )
    
}

