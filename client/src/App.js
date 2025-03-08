
import { Route, Routes } from 'react-router';
// import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import GetUser from './components/GetUser';
import Get from './Crud/Get';
import Post from './Crud/Post';
import Put from './Crud/Put';
import GetD from './practice/GetD';
import PostD from './practice/PostD';
import GetMethod from './sambodhi/GetMethod';
import Putd from './practice/Putd';




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
        <Route path="Getd" element={<GetD/>}/>
        <Route path="postd/:" element={<PostD/>}/>
        <Route path='/Putd/:userId' element={<Putd/>}/>
       
      </Routes>
       {/* <GetUser/> */}
    </div>
  );
}

export default App;
