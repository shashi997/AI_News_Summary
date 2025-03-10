import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { SummarizedNewsProvider } from './contexts/SummarizedNewsContext';

function App() {


  return (
    <SummarizedNewsProvider>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </SummarizedNewsProvider>
  )
}

export default App
