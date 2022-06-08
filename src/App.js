import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Application from './Component/Application/Application';
import Personaldetails from './Component/Personaldetails/Personaldetails';
import Businessdetails from './Component/Businessdetails/Businessdetails';
import Applicationdetails from './Component/Applicationdetails/Applicationdetails';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer/>
    </div>
  );
}

export default App;
