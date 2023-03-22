import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import AddProject from './components/admin/AddProject'
import EditProject from './components/admin/EditProject'
import Panel from './components/admin/Panel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='admin'>
          <Route path='login' element={<Login/>}></Route>
          <Route path='add' element={<AddProject/>}></Route>
          <Route path='edit/:id' element={<EditProject/>}></Route>
          <Route path='panel' element={<Panel/>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
