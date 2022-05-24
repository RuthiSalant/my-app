import { Login } from './components/login';
import { Routes, Route, Switch, BrowserRouter } from 'react-router-dom'
import { React } from "react";
import { TestList } from './components/myTests';
import PageNotFound from './components/PageNotFound'
import { Test } from './components/editTest'
import { EditorDemo } from './components/myTests'
import { ShowTest } from './components/showTest'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element= {<Login />} />
        <Route path='/myTests' exact element= {<TestList />} />
        <Route path='*' exact element= {<PageNotFound />} />
        <Route path='/editTest' element= {<Test />} />
        <Route path='/editorDemo' element= {<EditorDemo />} />
        <Route path='/showTest' element= {<ShowTest />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
