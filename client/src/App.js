import { Route, Routes } from "react-router";
// import './App.css';

import Get from "./Crud/Get";
import Post from "./Crud/Post";
import Put from "./Crud/Put";
import PostData from "./ReactCrud/PostData";
import GetData from "./ReactCrud/GetData";
import UpdateData from "./ReactCrud/UpdateData";
// import GetD from "./practice/GetD";
// import PostD from "./practice/PostD";
// import GetMethod from "./sambodhi/GetMethod";
// import Putd from "./practice/Putd";
import {useDispatch, useSelector} from 'react-redux'
import { decCount, incCount } from "./redux/action/userAction";

function App() {

  const selector=useSelector((state)=>state.coutReducer)

  const dispatch=useDispatch()

  return (
    <div>
   <button onClick={()=>dispatch(incCount())}>inc</button>
{selector}
   <button onClick={()=>dispatch(decCount())}>dec</button>
    </div>
  );
}

export default App;
