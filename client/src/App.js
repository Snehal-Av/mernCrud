
import { Route, Routes } from 'react-router';
// import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import GetUser from './components/GetUser';




function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/add" element={<Add/>}/>
        <Route path='/get' element={<GetUser/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
