import logo from './logo.svg';
import './App.css';
import UsersList from './UsersList';
import EditUser from './EditUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddUser from './AddUser';

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN stack</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersList/>} exact></Route>
          <Route path='/addUser' element={<AddUser/>} exact></Route>
          <Route path='/editUser' element={<EditUser/>} exact></Route>
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
