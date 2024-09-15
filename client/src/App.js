import logo from './logo.svg';
import './App.css';
import UsersList from './UsersList';
import EditUser from './EditUser';
import AddUser from './AddUser';
import Dashboard from './Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">

      
      
      <BrowserRouter>
        <Routes>
          <Route path='/user' element={<UsersList/>} exact></Route>
          <Route path='/user/add' element={<AddUser/>} exact></Route>
          <Route path='/user/edit/:_id' element={<EditUser/>} exact></Route>
          <Route path='/dashboard' element={<Dashboard/>} exact></Route>
          <Route path='/' element={<Dashboard/>} exact></Route>
          <Route path='/settings' element={<Dashboard/>} exact></Route>
          <Route path='/profile' element={<Dashboard/>} exact></Route>
          <Route path='/login' element={<Dashboard/>} exact></Route>
          <Route path='/logout' element={<Dashboard/>} exact></Route>
          

        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
