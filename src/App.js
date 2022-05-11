import logo from './logo.svg';
import { Login } from './components/login';
import { Routes, Route, Switch, BrowserRouter } from 'react-router-dom'
import{React}  from "react";
import {TestList} from './components/myTests';
 import PageNotFound from'./components/PageNotFound'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/myTests' exact element={<TestList />} />
        <Route path='*' exact element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

///we are success!!!!
