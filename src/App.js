import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Application from './Component/Application/Application';
import Personaldetails from './Component/Personaldetails/Personaldetails';
import Businessdetails from './Component/Businessdetails/Businessdetails';
import Applicationdetails from './Component/Applicationdetails/Applicationdetails';


function App() {
  return (
    <div >
      <Routes>
        
        <Route path='/' element={<Application />}>
          <Route path='Personal-details' element={<Personaldetails />} />
          <Route path='Business-details' element={<Businessdetails/>} />
          <Route path='Application-details' element={<Applicationdetails/>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
