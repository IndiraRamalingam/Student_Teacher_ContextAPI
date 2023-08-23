import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard';
import AddStudent from './components/Students/AddStudent';
import EditStudent from './components/Students/EditStudent';
import ViewStudents from './components/Students/ViewStudent';
import AddTeacher from './components/Teachers/AddTeacher';
import EditTeacher from './components/Teachers/EditTeacher';
import ViewTeacher from './components/Teachers/ViewTeacher';
import { AppProvider } from './components/AppContext';

function App() {
  return (
   <>
   <AppProvider>
    {/* Route the path */}
    <BrowserRouter>
        <Routes>
          {/* Layout is fixed for all components here and Outlet is used in Layout.js to render the components */}
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path='/Dashboard' element={<Dashboard />}/>
                <Route path='/Student/AddStudent' element={<AddStudent />}/>                
                <Route path='/Student/EditStudent/:id' element={<EditStudent />}/>
                <Route path='/Student/ViewStudents' element={<ViewStudents />}/>
                <Route path='/Teacher/AddTeacher' element={<AddTeacher />}/>     
                <Route path='/Teacher/EditTeacher/:id' element={<EditTeacher />}/>
                <Route path='/Teacher/ViewTeachers' element={<ViewTeacher />}/>
              </Route>    

        </Routes>
    </BrowserRouter>
    </AppProvider>
   </>
  )
}

export default App