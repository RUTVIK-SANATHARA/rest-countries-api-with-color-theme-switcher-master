import Main from '../components/main';
import '../css/App.css';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Sub from "../components/sub";
import Navbar from '../components/Navbar';
import NoteState, { States } from '../context/noteState';
// import { useState } from 'react';
store.subscribe(()=>{
  console.log(store.getState());
})

// https://restcountries.com/v2/all
// https://restcountries.com/v2/name/${input}
// `https://restcountries.com/v2/name/${countryName.countryName}?fullText=true`);
function App() {
  
  return (
    <>  
    
      <Provider store={store}>
      <NoteState>
         <BrowserRouter>
         <Navbar/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/sub/:id" element={<Sub/>}></Route>
          </Routes>
       </BrowserRouter>
       </NoteState>
       </Provider>
    </>
  );
}

export default App;
