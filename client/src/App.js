
import { Route, Routes } from 'react-router';
// import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import GetUser from './components/GetUser';
import Get from './Crud/Get';
import Post from './Crud/Post';
import Put from './Crud/Put';




function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/add" element={<Add/>}/>
        <Route path='/get' element={<GetUser/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/getdata' element={<Get/>}/>
        <Route path='/postdata' element={<Post/>}/>
        <Route path='/putdata/:userId' element={<Put/>}/>
      </Routes>
    </div>
  );
}

export default App;
