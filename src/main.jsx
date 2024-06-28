import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UsersDetail from './UsersDetail.jsx'
import AddUser from './AddUser.jsx'
import AddBlog from './AddBlog.jsx'
import EditUser from './EditUser.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <div className='p-10 bg-[rgb(36,74,85)] text-white flex justify-between'>
      <h1 className='text-3xl'>Erfan's BlogApp</h1>
      <ul className='flex gap-16'>
        <li className='text-2xl'><a href='/'>Home</a></li>
        <li className='text-2xl'><a href='/addBlog'>Add Blog</a></li>
        <li className='text-2xl'><a href='/addUser'>Add User</a></li>
        <li className='text-2xl'><a href='/show'>Show User</a></li>
      </ul>
    </div>
    <Routes>
      <Route path='/' element={<App />} ></Route>
      <Route path='/addUser' element={<AddUser />}></Route>
      <Route path='/show' element={<UsersDetail />}></Route>
      <Route path='/addBlog' element={<AddBlog />}></Route>
      <Route path='/edit/:idToEdit' element={<EditUser />}></Route>
    </Routes>
  </Router>
  // </React.StrictMode>,
)
