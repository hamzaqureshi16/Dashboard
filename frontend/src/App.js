import './App.css';
import Form from './components/Form';
import Visualization from './components/visualization';
import Nav from './components/Nav';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route path='/dashboard' element={<Form/>}/>
        <Route path='/visualise' element={<Visualization/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
