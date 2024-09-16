import './App.css';
import Home from './Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Create from './Create';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/create' element={<Create></Create>}></Route>

    </Routes>


    </BrowserRouter>
  );
}

export default App;
