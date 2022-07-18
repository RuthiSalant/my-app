import { Login } from './components/login/login';
import { Routes, Route, Switch, BrowserRouter } from 'react-router-dom'
import { React } from "react";
import PageNotFound from './components/page-not-found/PageNotFound'
import { Test } from './components/test/editTest/editTest'
import { EditorDemo,TestList } from './components/test/myTests'
import { ShowTest } from './components/test/showTest'

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
