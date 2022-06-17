
import './App.css';
import Homepage from './pages/homepage';
import Signpage from './pages/Signpage';
// import SignUpPage from './pages/SignUpPage';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Homepage/>}>  </Route>
          <Route path='/signin' element={<Signpage/>}> </Route>
          <Route path='/signup' element={ <SignUpPage/>}> </Route>
        </Routes>
      
    </>
  );
}

export default App;
